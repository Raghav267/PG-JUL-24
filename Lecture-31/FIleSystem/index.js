const fs = require("fs");
const path = require("path");

const f1 = path.join(__dirname, "ghi.txt");
const data = "We aare writing data seprately."

fs.writeFile(f1, data, (err) => {
    if (err) throw err;
    console.log("File written succefully.");
})

