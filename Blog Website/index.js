import express from "express"
const app = express()
const port = 3000

app.use(express.static("public"))

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req,res) => {
    res.render("index.ejs")
})

app.post("/submit", (req,res) => {
    let title  = req.body["title"];
    let blogContent = req.body["content"];
    console.log(title);
    res.render("main.ejs", {title, blogContent})
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})