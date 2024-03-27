import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  let fName = req.body["fName"];
  let lName = req.body["lName"];
  let totalNameLength = fName.length + lName.length;
  res.render("index.ejs", {length: totalNameLength}) 
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
