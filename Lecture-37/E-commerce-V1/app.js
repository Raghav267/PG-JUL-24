const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const productRoutes = require("./routes/product");

// connecting to the database
mongoose.connect('mongodb://127.0.0.1:27017/july-project')
    .then(() => {
        console.log("DB Connected.")
    })
    .catch((err) => {
        console.log("Error Connecting the DB : " + err)
    })

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);

app.use(productRoutes);


app.listen(3000, () => {
    console.log("Server Start Running at 3000 port.")
})