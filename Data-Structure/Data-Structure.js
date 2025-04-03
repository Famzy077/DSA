let names = ['Femi', 'Olaonipekun', 'Festus', 'Akinola', 'Aremu'];
const result = names.findIndex(getName => getName === 'Festus');
console.log(result); 

// To add to an Array
// names.splice(2, 1, 'Akinyemi', 'kiwi')

// To remove from an Array
// let everything = names.splice(2,2);
// or 
let slice = names.slice(1, 3)
console.log(slice, 'This is slice');
// console.log(everything, 'This is everything');
// console.log(names);

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
for(let items of addSet){
    console.log(items);
}
addSet.clear();
// console.log(addSet);

// Object
let boy = [
    { 
        name: 'Femi', age: 23
    },
    {
        name: 'John', age: 30
    },
    {
        name: 'Doe', age: 25
    }
]
// boy.push({name: 'Akin', age: 20});
delete boy.age;
console.log(boy);

// document.addEventListener('DOMContentLoaded', () => {

// boy.map(items => {
//     let box = document.getElementById('box');
//     if (box) {
//         let section = document.createElement('section');
//         section.innerHTML = `
//             <main>
//                 <p> Hello this is my name ${items.name} </p>
//                 <p> Hello this is my age ${items.age} </p>
//             </main>
//         `;
//         box.appendChild(section);
//     } else {
//         console.error('Element with id "box" not found');
//     }
// });
// }

let person = {
    name: 'Femi',
    age: 23,
    address: {
        street: '123 Main St',
        city: 'Lagos',
        state: 'LA'
    },
    okay  () {
        let hii = this.name + ' is ' + this.age + ' years old'
        return hii;
    }
}
person.okay();
console.log(person.okay());