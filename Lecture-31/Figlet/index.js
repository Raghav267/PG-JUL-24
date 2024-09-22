const figlet = require("figlet");
const colors = require("colors");

// console.log(figlet);
figlet("Hello world", (err, data) => {
    if (err) throw err;

    console.log(data.yellow);

})