import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "sjnn";
const yourPassword = "sjnn";
const yourAPIKey = "dd374283-ec1d-4878-a609-f45c177405c0";
const yourBearerToken = "86fa9647-a419-4c93-9563-4191d5e567e2";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try{
    const response = await axios.get(API_URL + "random")
    console.log(response.data);
    const result = JSON.stringify(response.data);
    res.render("index.ejs", {content: result});
  } catch(error){
      console.log(error.message);
      res.render("index.ejs", {content: error.message});
  }
  //TODO 2: Use axios to hit up the /random endpoint
  
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  try{
    const response = await axios.get(API_URL + "all", {
      params: {
        page: 2
      }
    },{
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    })
    console.log(response.data);
    res.render("index.ejs", {content: JSON.stringify(response.data)});
  } catch(error) {
    console.log(error.message);
    res.render("index.ejs", {content: error.message});
  }
  
  
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908

  
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  try{
    const response = await axios.get(API_URL + "filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      }
    })
    console.log(response.data);
    res.render("index.ejs", {content: JSON.stringify(response.data)});
  } catch(error) {
    console.log(error.message);
    res.render("index.ejs", {content: error.message});

  }
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
try{
  const response = await axios.get(API_URL + "secrets/42", {
    headers: { 
      Authorization: `Bearer ${yourBearerToken}` 
    },
  });
  console.log(response.data);
  res.render("index.ejs", {content: JSON.stringify(response.data)});
}catch(error) {
  console.log(error.message)
  res.render("index.ejs", {content: error.message});
}
  
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
