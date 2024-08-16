// const arr = ["Apple", "Mango", "Banana", "Guava", "Papaya", "Grapes"];
// const obj = {
//     name: "Krish",
//     age: "21",
//     education: "Btech",
//     address: "Delhi"
// };

// for (let i = 0; i < arr.length; i++) {
//     console.log(`${arr[i]} is present at index: ${i}`);
//     // console.log(arr[i] + " is present at index: " + i);
// }

// for of

// for (fruit of arr) {
//     console.log(fruit);
// }

// for in loops'

// for (info in obj) {
//     console.log(`${info}:${obj[info]}`)
// }

// // while && do while

// const inp = prompt("Enter your name here!!");

// console.log(inp)


// Java Script Functions

// let a = 14;
// let b = 20;
// console.log("value before Swapping")
// console.log(a);
// console.log(b);

// let temp = a;
// a = b;
// b = temp;

// console.log("value after swapping.")
// console.log(a);
// console.log(b);

// function hello() {
//     // console.log("hello world!!!")
//     let a = 5
//     let b = 10;
//     console.log(a + b);

// }

// hello();

function add(a, b, c = 5) {  // Parameters
    // console.log(a + b + c);
    return (a + b + c);
}

// add(4, 5, 10) // arguements
// const st = add;
// console.log(st(4, 5, 10));
// const ans = st(4, 5, 10)
// console.log(ans);

// const ans = (a, b, c = 5) => {  // Parameters
//     // console.log(a + b + c);
//     return (a + b + c);
// }
// console.log(ans(4, 5, 10))

// const ans = (a, b, c = 10) => {
//     return (a + b + c);
// }

// console.log(ans(4, 5, 10))

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map(function (material) {
    return material.length
}));


