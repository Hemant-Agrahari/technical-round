/**Reverse a string */
const reverseString = (str) => str.split("").reverse().join(",");
console.log(reverseString("hello"));

/**Check giving string is palindrone or not */
const reverString = (str) => {
  const res = str.split("").reverse().join("");
  return str === res;
};
console.log(reverString("aaa"));

/**output */
const person = {
  name: "Alice",
  greet() {
    return `Hello ${this.name}`;
  },
};
console.log(person.greet());

/**count vowel in string */
const countVowel = (str) => {
  return str.match(/[aeiou]/gi).length || 0;
};
console.log(countVowel("HEMANT"));
// output:2

/**Check if Two Strings are Anagrams

 */

const checkAnagram = (str1, str2) => {
  return str1.split("").sort().join() === str2.split("").sort().join();
};
console.log(checkAnagram("hem", "emh"));

/**split , slice*/
const arr = "Hello I am Hemant kumar Agrahari";
console.log(arr.length);
console.log(arr);
const splitRes = arr.split("", 5);
console.log(splitRes);
//output-[ 'H', 'e', 'l', 'l', 'o' ]

const sliceRes = arr.slice(0, 4);
console.log(sliceRes);
// output:Hell

/**Convert a sentence in a array */
const arrString = "Hello I am Hemant kumar Agrahari";
console.log(arrString.split(""));
// output:
[
  "H",
  "e",
  "l",
  "l",
  "o",
  " ",
  "I",
  " ",
  "a",
  "m",
  " ",
  "H",
  "e",
  "m",
  "a",
  "n",
  "t",
  " ",
  "k",
  "u",
  "m",
  "a",
  "r",
  " ",
  "A",
  "g",
  "r",
  "a",
  "h",
  "a",
  "r",
  "i",
];

console.log(...arrString);

/**Reverse a word */
const reverseAWord = "Hello I am Hemant kumar Agrahari";
console.log(reverseAWord.split(" "));
console.log(reverseAWord.split(" ").reverse().join(" "));
// output:Agrahari kumar Hemant am I Hello
