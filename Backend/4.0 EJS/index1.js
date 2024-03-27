import express from "express";

const app = express();
const port = 3000;
const fruits = ["Apple", "Orange", "Banana", "Mango"];

app.get("/", (req, res) => {
    const fruitData = {
        fruitsArr: fruits
    }
    res.render("index.ejs", fruitData)
})

app.listen(port, (req, res) => {
    console.log(`Listening to port ${port}`);
})