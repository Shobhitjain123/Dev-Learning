import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
const APP_URI = "https://dog.ceo/api/breeds/image/random"
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req,res) => {
    try{
        const result = await axios(APP_URI);
        console.log(result.data.message);
        res.render("index.ejs", {dogImage: result.data.message});
    }catch(error){
        console.log("Dog breed")
    }    
})

app.post("/", async (req,res) => {
    const breed = req.body.breed;
    try{
        const result = await axios(`https://dog.ceo/api/breed/${breed}/images`)
        console.log(result.data)
        res.render("index.ejs", {dogImage: result.data.message})
    }catch(error){
        console.log(error.response.data)
    }
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})