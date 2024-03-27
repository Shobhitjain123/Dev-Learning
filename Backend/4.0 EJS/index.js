import express from "express";

const app  = express()
const port = "3000";
const d = new Date();
let day;
let msg;

if(d.getDay() == 0 || d.getDay() == 6){
    day = "Weekend";
    msg = "Time to have fun";
}
else{
    day = "Weekday";
    msg = "Time to work hard";
}

app.get("/", (req,res) => {
    console.log(d.getDay());
    res.render("index.ejs", 
    {
        todaysDay: day,
        Message: msg    
    })
})

app.listen(port, (req,res) => {
    console.log(`Listening Server on Port ${port}`);
})
