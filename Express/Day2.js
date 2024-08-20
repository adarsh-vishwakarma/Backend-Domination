// npm i express-session
const express = require("express");
// const session = require('express-session');
const app = express();
const expressSesssion = require("express-session");

app.use(
  expressSesssion({
    secret: "random stuff",
    resave: false, //agar change nahi hua to resave nahi karna
    saveUninitialized: false, //agar user ne login nahi kiya hai to
  })
);

app.get("/", function (req, res, next) {
  res.send("hey");
});

app.get("/create", function (req, res, next) {
  req.session.polo = true;
  res.send("done");
});

app.get("/check", function (req, res, next) {
  console.log(req.session.polo);
});

app.listen(3000);

// server restart hone par true nahi show hoga undefined rahega
// pehle / par fir /create uske baad /check
