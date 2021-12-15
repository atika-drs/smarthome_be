const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, function (err) {
    if(err){
        console.log("Error while starting server");
    }
    else{
        console.log("Server has been started at "+port);
    }
 });