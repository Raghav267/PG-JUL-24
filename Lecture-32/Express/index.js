const express = require("express");
const app = express();

// app.use((req, res) => {
//     // console.log(req);
//     // console.log(res);
//     res.send('hello from app.use')

// })

app.get("/", (req, res) => {
    res.send("HOME PAGE");
})

app.get("/cat", (req, res) => {
    res.send("Meeoowww");
})

app.post("/cat", (req, res) => {
    res.send("Post request received")
})

app.get("/dog", (req, res) => {
    res.send("Woof Woof");
})

app.get("/r/:subredit", (req, res) => {
    const { subredit } = (req.params);
    res.send(subredit);
})

app.get("/username", (req, res) => {
    const { name } = (req.query);
    res.send(`Username is send to ${name}`)
})














// //wildcard is for everything
// app.post("*", (req, res) => {
//     res.send("You have been lost kid.")
// })

app.listen(3000, () => {
    console.log("Server start running at 3000 port...")
})