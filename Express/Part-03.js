// npm i connect-flash
//npm i express-session
const express = require("express");
const app = express();
const expressSession = require("express-session");
const flash = require("connect-flash");

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "Anything you like"
}));

app.use(flash()); 

app.get("/", function(req, res, next) {
    req.flash("error", "Invalid Input"); //error me message save hoga
    res.redirect("/error");
})

app.get("/error", function(req, res, next) {
    let message = req.flash("error");
    res.send(message); 
})


app.listen(3000)
