const weekOne = () => {
    // given this array loop through it and display it in assending order.
    const students = [
        {name: 'Akinola Femi', grade : 'A'},
        {name: 'Johnson Emma', grade : 'C'},
        {name: 'Aremu Festus', grade : 'A'},
        {name: 'Monday James', grade : 'D'},
        {name: 'Xavier Doe', grade : 'A'},
        {name: 'Treasure Akinola', grade : 'C'},
        {name: 'John Doe', grade : 'B'},
    ]
    const groupedItems = {};

    students.forEach(({name, grade}) => {
        if(!groupedItems[grade]){
            groupedItems[grade] = [];
        }
        groupedItems[grade].push(name)
    })
    console.log(groupedItems)

    // Extract only text and display it in sequence;
    const items = ['shoe', 12, '23', 'bags', 'cloths', 2, 4, 6, 8, 1];
    const sortItems = items.filter(item => typeof item === 'number').sort((a, b) => a - b)
    console.log(sortItems)

    // Reverse a string without using built reverse function;
    const reverse = (str) => [...str].reduce((rev, char) => char + rev, "");
    console.log(reverse('Money'));

    // check if the sequence has the same value;
    const checkEqual = (array1, array2) => array1.sort().toString() === array2.sort().toString();
    console.log(checkEqual([12, 4, 'Money'], [12, 4, 'Money']))

    // Display the frequnce from lowest to the highest;
    const cards = ['james', 3, 5, 7, 9, 2, '10', 'King', 'Queen', 'Xavier'];
    // define a rankCard to hold objects
    const rankCard = {
        'james': 12,
        '10': 14,
        'King': 11,
        'Queen': 13,
        'Xavier': 10
    }

    // convert it to main 6
    const convert = cards.map(card => typeof card === 'string' ? rankCard[card] : card);
    const sortCard = convert.sort((a, b) => a -b);

    const reversecard = {
        12 : 'james',
        11: 'King',
        14: '10',
        13: 'Queen',
        10: 'Xavier'
    }

    const final = sortCard.map(value => reversecard[value] || value)
    console.log(final)
}
weekOne()