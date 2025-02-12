/**Create an Object and Access Its Properties */
const obj = {
  name: "Shiv baba",
  location: "kailash",
  year: 1234,
  alterName: "bhole baba",
};
console.log(obj.name);
console.log(obj["year"]);

/**Add, Update, and Delete Properties in an Object */
const user = {
  name: "John Doe",
  age: 30,
  profession: "Software Developer",
  skills: ["JavaScript", "React", "Next.js"],
};

console.log((user.nickName = "Abc")); //Add
console.log((user.name = "Doe")); //edit
console.log(delete user.skills);
console.log(user);

/**Check property is exist or not */
let car = { brand: "Toyota", model: "Corolla" };
console.log("brand" in car); // Output: true
console.log(car.hasOwnProperty("year")); // Output: false

/**Iterate Over Object Properties */
let student = { name: "Mike", grade: "A", age: 20 };

for (let key in student) {
  console.log(key, student[key]);
}
// Output:
// name Mike
// grade A
// age 20

/*Convert Object Keys and Values to Arrays */

let art = { a: 1, b: 2, c: 3 };
console.log(Object.keys(art)); // Output: ["a", "b", "c"]
console.log(Object.values(art)); // Output: [1, 2, 3]
console.log(Object.entries(art)); // Output: [["a",1],["b",2],["c",3]]

/*Merge Two Objects */
const class12 = {
  name: "ABC",
  year: 222,
};
const class13 = {
  name: "weee",
  years: 233,
};
const merge = { ...class12, ...class13 };
console.log(merge);

/**Convert an Array to an Object */
let entries = [
  ["name", "John"],
  ["age", 30],
  ["city", "NY"],
];
let result = Object.fromEntries(entries);
console.log(result); // Output: { name: "John", age: 30, city: "NY" }

/** */
function countFrequency(arr) {
  return arr.reduce((acc, item) => {
    // If the item already exists in the accumulator, increment its count
    // Otherwise, initialize it to 0 and then add 1
    acc[item] = (acc[item] || 0) + 1;
    return acc; // Return the updated accumulator object
  }, {}); // Start with an empty object as the initial accumulator
}

// Example usage:
console.log(
  countFrequency(["apple", "banana", "apple", "orange", "banana", "apple"])
);

// Output: { apple: 3, banana: 2, orange: 1 }
