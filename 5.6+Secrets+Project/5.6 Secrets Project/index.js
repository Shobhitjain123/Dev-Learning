// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const APP_URL = "https://secrets-api.appbrewery.com"

app.use(express.static("public"))

app.get("/", async (req,res) => {
    try{
        const secretResult = await axios(APP_URL + "/random");
        console.log(secretResult.data.secret);
        res.render("index.ejs", {
            secret : secretResult.data.secret,
            user: secretResult.data.username
        })
    }catch(error){
        console.log(error.response.data)
        res.status(500);
    }
    
})

app.listen(port, () => {
    console.log(`Listening port ${port}`);
})

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
