// This code demonstrates various advanced data structures and algorithms in JavaScript.
// It includes examples of sets, maps, recursion, and sorting algorithms.

// HashMap Examples
let users = {};
users["Bob"] = "Engineer";
users["Alice"] = "Designer";

console.log(users["Bob"]);  // "Engineer"

const names = {};
names['Akinola'] = 'Femi';
names['Aremu'] = 'Odu';
names['Olaonipekun'] = 'Festus';
console.log(names)

let nameKeys = Object.keys(names);
let nameValues = Object.values(names);
console.log(nameKeys) // Output: ['Akinola', 'Aremu', 'Olaonipekun']
console.log(nameValues) // Output: ['Akinola', 'Odu', 'Festus']

for(let getName in names){
    console.log(getName, names[getName])
}
console.log('------------------');


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

const items = {};
items['Bag'] = '$12,000'
items['Shoes'] = '$1,000';
items['Shirt'] = '$2,000';
items['Pants'] = '$3,000';

console.log(items['Bag']) // Output: $12,000;

for(let getAllItems in items){
    let display = document.createElement('div');
    display.innerHTML = getAllItems + ': ' + items[getAllItems];
    document.body.appendChild(display);
}

let schools = {
    University: 'University of Lagos',
    College: 'Lagos State College',
    Polytechnic: 'Lagos State Polytechnic'
}

let getSchool = Object.keys(schools);
let getSchoolValues = Object.values(schools);

for(let getSchool in schools){
    let display = document.createElement('div');
    display.innerHTML = getSchool + ': ' + schools[getSchool], ' okayy';
    document.body.appendChild(display);
}
console.log(getSchool) // Output: ['University', 'College', 'Polytechnic']
console.log(getSchoolValues) // Output: ['University of Lagos', 'Lagos State University', 'Lagos State Polytechnic']

const students = [
    { name: "Femi", grade: "A" },
    { name: "Ada", grade: "B" },
    { name: "Uche", grade: "A" },
    { name: "Kemi", grade: "C" },
    { name: "Tolu", grade: "B" },
  ];
  
  const groupedByGrade = {};
  
  students.forEach(({ name, grade }) => {
    if (!groupedByGrade[grade]) {
      groupedByGrade[grade] = [];
    }
    groupedByGrade[grade].push(name);
  });
  
  students.forEach(({name, grade}) => {
    if(!groupedBygrade[grade]){
        groupedByGrade[grade] = [];
    }
    groupedByGrade[grade].push(name);
  })
  
  // Display the grouped result
  Object.entries(groupedByGrade).forEach(([grade, names]) => {
    const display = document.createElement('div');
    display.innerHTML = `Grade ${grade}: ${names.join(', ')}`;
    document.body.appendChild(display);
  });
  