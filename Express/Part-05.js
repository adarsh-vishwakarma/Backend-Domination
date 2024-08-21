// npm i cookie-parser

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", function(req, res, next) {
    res.send("Hey!..");
})

app.get("/check", function(req, res, next) {
    console.log(req.cookies.name);
    res.send("checking")
})

app.get("/banned", function(req, res, next) {
    res.cookie("name", "Adarsh");
    res.send("banned")
})

app.listen(3000);
