const fs = require("fs");
// console.log(fs);

// fs.readFile("./abc.txt", {
//     encoding: "utf-8",
//     flag: "r"
// }, (err, data) => {
//     if (err) throw err;

//     console.log(data);

// })

const data = fs.readFileSync("./abc.txt")

console.log(data.toString());

console.log("END");