const revision = () => {
    // Check Equal frequence
    const checkEqual = (array1, array2 ) => array1.sort().toString() === array2.sort().toString();
    console.log(checkEqual([12, 1, 15], [12, 1, 15]))
    
    console.log('*********************')

    // Reverse String
    const reverse = (str) => [...str].reduce((rev, char) => char + rev, "");
    console.log(reverse('Hello'));
 
    console.log('*********************')

    // AddSet method
    const addSet = new Set();
    addSet.add('Olawale');
    addSet.add('Aremu');
    addSet.add('Femi');
    addSet.add('John');

    const removeItems = addSet.delete('John');
    console.log(removeItems)
    console.log(addSet);
    
    console.log('*********************')

    // Loop through addSet
    for(index of addSet){
        console.log(index)
    }
    console.log('*********************')

    // display lowest from highest
    const cards = ['John', 'James', 9, 7, 2, 4, 1, 'Queen', 'King'];
    // console.log(cards);
    const rankMap = {
        'John': 11,
        'James': 13,
        'Queen': 12,
        'King': 15
    }

    const convert = cards.map(card => typeof card === 'string' ? rankMap[card] : card);

    const sortData = convert.sort((req, res) => req - res);
    const reverseMap = {
        11: 'John',
        12: 'Queen',
        13: 'James',
        15: 'King'
    }

    const result = sortData.map(value => reverseMap[value] || value);
    console.log(result);
    
}
revision()

// Extract only numbers from an array and sort them in ascending order
const data = [3, "hello", 9, "world", 1, "42", 5];

const result = data.filter(item => typeof item === "number")  // Step 1: keep only numbers
  .sort((a, b) => a - b);                    // Step 2: sort in ascending order

console.log(result);  // Output: [1, 3, 5, 9]
