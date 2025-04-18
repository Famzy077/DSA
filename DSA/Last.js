const task = () => {
    const cards = ['James', 9, 'John', 2, 8, 3, 1, 'Queen', 'King'];

    const rankCard = {
        'James': 12,
        'John': 15,
        'Queen': 11,
        'King' : 14
    }

    // Seperate string and number;
    // const string = cards.filter(card => typeof card === 'string').map(card => rankCard[card]);
    // const number = cards.filter(card => typeof card === 'number').sort((a, b) => b - a);
     
    const convert = cards.map(card => typeof card === 'string' ? rankCard[card] : card)
    const sort = convert.sort((a, b) => a -b)

    const reverse = {
        12: 'James',
        15: 'John',
        11: 'Queen',
        14: 'King'
    }

    // merge string and number and get final answer.
    // const result = [...string, ...number].map(val => reverse[val] || val)
    const solution = sort.map(val => reverse[val] || val)
    console.log(solution)
}
// task()
const cards = ['James', 9, 'John', 2, 8, 3, 1, 'Queen', 'King'];

// const final = cards.filter(card => typeof card === 'string').sort((a, b) => a - b);
// console.log(f);

const rankCard = {
    'James': 12,
    'John': 15,
    'Queen': 11,
    'King' : 14
}
const reverse = {
    12: 'James',
    15: 'John',
    11: 'Queen',
    14: 'King'
}
const finals = cards.filter(card => typeof card === 'string')
    .map(card => rankCard[card])
    .sort((a, b) => a - b)
    .map(val => reverse[val] || val);
console.log(finals);

