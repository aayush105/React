var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// 1st method
// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);
// console.log(newNumbers);

// 2nd method (forEach method)
// var newNumbers = [];
// function double(x) {
//   newNumbers.push(x * 2);
// }
// numbers.forEach(double);
// console.log(newNumbers);

// 3rd method
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// 1st method
// const newNumbers = numbers.filter(function (num) {
//   return num < 10;
// });
// console.log(newNumbers);

// 2nd method (forEach method)
// var newNumbers = [];
// numbers.forEach(function (num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// });
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

// 1st method (reduce)
// var newNumbers = numbers.reduce(function (accumulator, curentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("curentNUmber = " + curentNumber);
//   return accumulator + curentNumber;
// });
// console.log(newNumbers);

// 2nd method (forEach)
// var newNumbers = 0;
// numbers.forEach(function (curentNUmber) {
//   newNumbers += curentNUmber;
// });
// console.log(newNumbers);

//Find - find the first item that matches from an array.

// const newNumbers = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(newNumbers);

//FindIndex - find the index of the first item that matches.

// const newNumbers = numbers.findIndex(function (num) {
//   return num > 10;
// });
// console.log(newNumbers);

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(newEmojipedia);
