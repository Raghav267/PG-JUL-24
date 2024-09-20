// console.log("We are learning Node");
// console.log("WE have finsihed learnig React.");
// const Person = {
//     name: " Sabeel Khan",
//     age: "32",
//     occupation: "SDE"
// };
// console.log(Person);

// console.log(process.release);     
const names = (process.argv.slice(2));

for (let name of names) {
    console.log(`Welcome in Node Session ${name}`)
}