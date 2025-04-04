// This code demonstrates various advanced data structures and algorithms in JavaScript.
// It includes examples of sets, maps, recursion, and sorting algorithms.

// HashMap Examples
let users = {};
users["Bob"] = "Engineer";
users["Alice"] = "Designer";

console.log(users["Bob"]);  // "Engineer"

// Using Map for better performance with large datasets
let firstNonRepeatingCharacter = (str) => {
    let charCount = new Map();  // Create a map to store character frequencies

    // Loop through the string and count the occurrences of each character
    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1); // Increment count or set to 1
    }

    // Loop through the string again to find the first character that appears only once
    for (let char of str) {
        if (charCount.get(char) === 1) { // Check if the count is 1
            return char;  // Return the first non-repeating character
        }
    }
    // If no non-repeating character is found, return null
    return null;
}

console.log(firstNonRepeatingCharacter("swiss"));  // Output: "w"

// Recursion Example: Factorial Calculation
let factorial = (n) => {
    if (n === 0) return 1;  // Base case
    return n * factorial(n - 1);  // Recursive case
}
console.log(factorial(5));  // 5! = 5 * 4 * 3 * 2 * 1 = 120

// Recursion Example: Sum of Nested Arrays
// This function takes an array that may contain nested arrays and returns the sum of all numbers in it.
function sumArray(arr) {
    let sum = 0;
    for (let el of arr) {
        if (Array.isArray(el)) {
            sum += sumArray(el);  // Recursion!
        } else {
            sum += el;
        }
    }
    return sum;
}

console.log(sumArray([1, [2, 3], [4, [5, 6]]])) // Output: 21
// Output: 1


// Sorting Algorithms
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i), right.slice(j));
}

console.log(mergeSort([3, 7, 4, 1, 5, 8, 2, 6]));  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
