const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

let comments = [
    {
        id: 1,
        user: "Akshansh",
        text: "Nice Phone"
    },
    {
        id: 2,
        user: "Manish",
        text: "Nice Battery Back-up"
    },
    {
        id: 3,
        user: "Anjali",
        text: "We are part of July Batch"
    }
];


// getting all the comments
app.get("/comments", (req, res) => {
    res.render("index", { comments })

})

// getting a form for creattig the comment
app.get("/comments/new", (req, res) => {
    res.render("new");
})

// creating a comment
app.post("/comments", (req, res) => {
    const { user, comment } = req.body;
    comments.push({ id: (comments.length + 1), user: user, text: comment });
    res.redirect("/comments");
})

// showing a prticular comment.
app.get("/comments/:commentId", (req, res) => {
    const { commentId } = req.params;
    const foundComment = comments.find((c) => (c.id) == commentId);
    console.log(foundComment);
    res.render("show", { foundComment });

})

//Getting a edit/update form
app.get("/comments/:commentId/edit", (req, res) => {
    const { commentId } = req.params;
    const foundComment = comments.find((c) => (c.id) == commentId);
    res.render("edit", { c: foundComment });
})

//Updating A particular comment
app.patch("/comments/:commentId", (req, res) => {
    // res.send("Comment Updated");
    const { commentId } = req.params;
    const foundComment = comments.find((c) => (c.id) == commentId);
    const { user, comment } = req.body;
    foundComment.user = user;
    foundComment.text = comment;
    res.redirect("/comments");
})

// Deleting a particular comment

app.delete("/comments/:commentId", (req, res) => {
    const { commentId } = req.params;
    const remComments = comments.filter((c) => commentId != (c.id));
    comments = remComments;
    res.redirect("/comments");

})

app.listen(3000, () => {
    console.log("Server started at 3000 port");
})