// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];// 11 12 13 14 15


// const arr1 = [11, 12, 13, 14, 15, ...arr];
// for (item of arr) {
//     arr1.push(item);
// }

// arr1.push(11);
// arr1.push(12);
// arr.push(13);
// arr.push(14);

// console.log(arr1);

// const car = {
//     engine: "av8",
//     fule: "petrol"
// }

// const porsche = {
//     ...car,
//     topSpeed: 300
// }

// console.log(porsche);

// Destructuring

// const arr = ['Mango', "Apple", "Pine Apple", "Grapes"];
// // const firstElement = arr[0];
// // const secondElement = arr[1];
// const [, , , fourthElement] = arr;
// // console.log(firstElement);
// // console.log(secondElement);
// console.log(fourthElement);

// const car = {
//     engine: "av8",
//     fuel: "petrol"
// }

// const { fuel, color = "green" } = car;
// // const fuela = car.fuel;
// // console.log(fuela);
// console.log(fuel);
// console.log(color);

// Rest Params

// const add = (a, b, c, d, ...params) => {
//     console.log(params);
//     console.log(a + b + c + d + params.reduce((cumm, sum) => cumm + sum, 0));
// }

// add(4, 5, 6, 12, 23, 45, 34, 45, 67, 1);