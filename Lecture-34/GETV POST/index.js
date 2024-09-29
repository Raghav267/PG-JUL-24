const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    // res.send("We are learning GET AND POST")
    res.render("index");
})

app.get("/user", (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.send("Form Submitted");
})

app.post("/user", (req, res) => {
    console.log(req.body);

    res.send("Post request accepted");
})
app.listen(3000, () => {
    console.log("Server start running at 3000 port.")
})