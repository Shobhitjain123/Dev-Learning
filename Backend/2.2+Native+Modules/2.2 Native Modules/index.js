const fs = require("fs");

// fs.writeFile("message1.txt", "Hello !!", (err) => {
//     if(err) throw err;
//     console.log("This file has beed saved");
// })

fs.readFile("message1.txt", "utf8", (err, data) => {
    if(err) throw err;
    console.log(data);
})