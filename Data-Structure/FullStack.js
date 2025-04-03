// ⿡ Reverse a String (Without .reverse())

const reverseString = (str) => [...str].reduce((rev, char) => char + rev, '');
console.log(reverseString("punch")); // "hcnup"
const reverExample = (rever) => [...rever].reduce((ref, char) => char + ref, '');
console.log(reverExample('I love coding'))

let schools = reverseString('schools');
console.log(schools); // "sloohcs"

// ⿢ Find the First Non-Repeating Character

const firstUniqueChar = (str) => [...str].find(char => str.indexOf(char) === str.lastIndexOf(char)) || console.log('No words found');
console.log(firstUniqueChar("aabbcddde")); // "c"



// ⿣ Check if Two Arrays are Equal (Ignoring Order)

const areArraysEqual = (arr1, arr2) => arr1.sort().toString() === arr2.sort().toString();
const isArrayEqual = (array1, array2) => array1.sort().toString() === array2.sort().toString();
console.log(areArraysEqual([1, 2, 3], [4, 7, 1])); // false
console.log(areArraysEqual([1, 2, 3], [1, 2, 3]), 'The answer is true'); // true


// ⿤ Simple Express Route

// import express from 'express';

// const app = express();

// app.get('/api/greet', (req, res) => res.json({ message: "Hello, Punch Team!" }));

// app.listen(3000, () => console.log("Server running on port 3000"));



// // ⿥ Find a User in MongoDB

// import User from './models/User.js';

// const findUser = async (email) => await User.findOne({ email });

// findUser("test@example.com").then(console.log);


// ⿦ Fetch Data with fetch & Async/Await

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error, 'Error APIs could not be fetch')
    }
}
fetchData('data.json')


// JavaScript Set
const addSet = new Set()
addSet.add('Xavier');
addSet.add('John');
addSet.add('Doe');
console.log(addSet);


// To Check if an item is in the Set
const checks = addSet.has('Xavier');
console.log(checks);

// To delete an item from the Set
// var Deletes = addSet.delete('Doe');
// console.log(Deletes)
for(let addSetData of addSet){
    console.log(addSetData);
}
addSet.clear();
// console.log(addSet);

// Object
let boy = [
    { name: 'Femi', age: 23},
    { name: 'John', age: 30},
    {name: 'Doe', age: 25}
]
boy.push({name: "Famzy", age: 21},
    {name: "Olamide", age: 40},
    {name: "James", age: 25 }
)   
// const click = document.getElementById('click')
console.log(boy);

click.addEventListener('click', () => {
    boy.splice(2, 1)
})

document.addEventListener('DOMContentLoaded', () => {

    boy.map(items => {
        let box = document.getElementById('box');
        if (box) {
            let section = document.createElement('section');
            section.innerHTML = `
                <main>
                    <p> Hello this is my name ${items.name} </p>
                    <p> Hello this is my age ${items.age} </p> <hr>
                </main>
            `;
            box.appendChild(section);
        } else {
            console.error('Element with id "box" not found');
        }
    });
})