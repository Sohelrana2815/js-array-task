// solution 1 :
const fruits = ["apple", "mango", "banana", "orange", "guava"];

// console.log(fruits[3]);

const changeSecondIndex = (fruits[1] = "jumbura");
// console.log(changeSecondIndex);
// console.log(fruits);

// solution 2
const placeName = ["bangladesh", "canada", "japan"];

placeName.push("us");
placeName.push("switzerland", "germany");
placeName.pop();
// console.log(placeName);

// solution 3

const books = ["story", "history", "ict", "math", "science", "js book"];

const exist = books.includes("js book");
// console.log("js book is available: ", exist);

// solution 4

const num = [1, 2, 3];
const array = "[]";
const person = ["moon", "john", "josef"];
console.log("Is this is an Array: ", Array.isArray(num));
console.log("Is this is an Array: ", Array.isArray(array));
console.log("Is this is an Array: ", Array.isArray(person));

// solution

const mobile = ["mi", "samsung", "nokia"];
const laptop = ["dell", "hp", "acer"];

console.log(mobile, "and", laptop);

const combineArray = mobile.concat(laptop);
console.log(combineArray);
