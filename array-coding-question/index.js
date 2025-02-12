/**
 *Find the maximum element in an array
 */
function largestElement(arr) {
  return Math.max(...arr);
}
console.log(largestElement([34, 23, 23, 45]));

/**Find the minimum element in an array
 */
function minimunElement(arr) {
  return Math.min(...arr);
}
console.log(minimunElement([34, 23, 45, 67]));

/**
 *Intersection of two arry
 */

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
console.log(arr1.filter((e) => arr2.includes(e)));

/**Union of two array */
const ar1 = [1, 2, 3, 4];
const ar2 = [3, 4, 5, 6];
const union = [...new Set([...ar1, ...ar2])];
console.log(union);

/**Reverse a array */

const reverseArray = (arr) => {
  return arr.reverse();
};
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));

/**
 * Find Second Largest Element in an Array
 */
const secondLargestElement = (arr) => {
  let first = -Infinity, // Variable to store the largest number
    second = -Infinity; // Variable to store the second largest number

  for (let num of arr) {
    // Loop through each number in the array
    if (num > first) {
      // If the current number is greater than 'first', update both 'first' and 'second'
      second = first; // The previous largest becomes the second largest
      first = num; // Update first to the new largest number
    } else if (num > second && num !== first) {
      // If the current number is not the largest but greater than 'second', update 'second'
      second = num;
    }
  }

  // If no second largest number exists (e.g., all elements are the same or only one element in the array), return null
  return second === -Infinity ? null : second;
};

console.log(secondLargestElement([23, 12, 67, 89, 56])); // Output: 67
console.log(secondLargestElement([10, 10, 10])); // Output: null (no second largest)
console.log(secondLargestElement([5])); // Output: null (only one element)
console.log(secondLargestElement([10, 20, 30, 40])); // Output: 30

/**Check is array is sorted */
const checkIsArraySorted = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
};
console.log(checkIsArraySorted([2, 1, 4, 5]));
console.log(checkIsArraySorted([1, 2, 3, 4, 5]));

/**Remove duplicate element from an array */
const removeDuplicateElement = (arr) => {
  return [...new Set(arr)];
};
console.log(removeDuplicateElement([1, 1, 1, 2, 3, 4, 4, 5]));
//[1,2,3,4,5]

/**Move all zero to end */
const moveZero = (arr) => {
  const checkNonZero = arr.filter((num) => num !== 0);
  const zeroCount = arr.length - checkNonZero.length;
  return [...checkNonZero, ...Array(zeroCount).fill(0)];
};
console.log(moveZero([1, 0, 2, 0, 0]));

/**Sort a array element */
const sortArray = (arr) => {
  return arr.sort((a, b) => a - b);
};
console.log(sortArray([2, 3, 1, 2]));

/**Arrange a element in ascending order */
const ascendingOrder = (arr) => {
  return arr.sort((a, b) => a - b);
};
console.log(ascendingOrder([45, 43, 2, 3]));

/**Arrange a element in descending order */
const descendingOrder = (arr) => {
  return arr.sort((a, b) => b - a);
};
console.log(descendingOrder([45, 43, 2, 3]));

/**Arrange even odd in separate array */
const eventOdd = (arr) => {
  const even = [],
    odd = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }
  return { even, odd };
};
console.log(eventOdd([2, 3, 4, 5, 6, 7, 8, 9, 10]));

/**
 *
 */
