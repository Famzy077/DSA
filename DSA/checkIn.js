const task = () => {
    const cards = ['James', 9, 'John', 2, 8, 3, 1, 'Queen', 'King'];
    const rankCard = {
        'James': 11,
        'John' : 13,
        'Queen' : 14,
        'King': 12
    }
    
    const sortCard = cards.map(card => typeof card === 'string' ? rankCard[card] : card);
    const convert = sortCard.sort((a, b) => a - b);

    const reverseCard = {
        11: 'James',
        13: 'John',
        14: 'Queen',
        12: 'King'
    }

    const final = convert.map(value => reverseCard[value] || value)
    console.log(final)

    const student = [
        {name: 'John', age: 12},
        {name: 'Doe', age: 21},
        {name: 'Femi', age: 26},
        {name: 'Emmma', age: 12},
        {name: 'Aremu', age: 12},
        {name: 'Bolu', age: 21},
    ]

    const groupStudent = {}
    student.forEach(({name, age}) => {
        if(!groupStudent[age]){
            groupStudent[age] = [];
        }
        groupStudent[age].push(name)
    })
    console.log(groupStudent)
}
// task()


const card = ['King', 'Queen', 8, 6, 2, 9, 3, 'Femi', 'John'];

const rankCard = {
  'King': 11,
  'Queen': 21,
  'Femi': 13,
  'John': 31
};


// Separate string and number values
// const strings = card.filter(c => typeof c === 'string').map(c => rankCard[c]);
// const numbers = card.filter(c => typeof c === 'number');

// Sort both groups
// const sortedStrings = strings.sort((a, b) => a - b);
// const sortedNumbers = numbers.sort((a, b) => a - b);

// Merge and map back to final values
// const result = [...sortedStrings, ...sortedNumbers].map(val => reverse[val] || val);
// console.log(result);

// sort both groups

// seperate string and number values, and sort both
const sepString = card.filter(car => typeof car === 'string').map(car => rankCard[car]).sort((a, b) => a - b);
const sepNumber = card.filter(car => typeof car === 'number').sort((a, b) => a - b);

const reverse = {
    11: 'King',
    21: 'Queen',
    13: 'Femi',
    31: 'John'
  };

//   merge and map back to final values
const solution = [...sepString, ...sepNumber].map(vaL => reverse[vaL] || vaL);
console.log(solution)


const onlyString =  ['Femi', 'Aremu', 3, 6, 8, 12, 6, 'John', 'Olaonipekun'];
const convertString = onlyString.filter(onlyStr => typeof onlyStr === 'string').sort((a, b) => a - b);
console.log(convertString)