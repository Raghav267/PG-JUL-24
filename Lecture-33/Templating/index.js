const express = require("express");
const app = express();
const ejs = require('ejs')
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const fruits = [
    "Mangoes",
    "Apples",
    "Grapes",
    "Litchi"
]

app.get("/", (req, res) => {
    // res.send("We are learning Templating.")
    res.render("welcome");
})

app.get("/index", (req, res) => {
    res.render("index");
})

app.get("/fruit", (req, res) => {
    res.render("fruit", { fruits });
})

app.get("/r/:subredit",(req,res)=>{
    // home work
    
})

app.listen(3000, () => {
    console.log("Server start running at 3000 port.");
})