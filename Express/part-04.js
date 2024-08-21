// npm i cors
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", function(req, res) {
    res.send("Hey");
})

// dont use app.use(cors())
// app.get("/sharable", cors() function(req, res) {
//     res.send("only thi part is sharable");
// })


app.listen(3000);
