const task = () => {
    // use Set method to add data and remove data from the list;
    const addSet = new Set();
    addSet.add('Aremu');
    addSet.add('Akinola');
    addSet.add('Femi')

    console.log(addSet)
    //Loop through the addSet and display the values
    for(addSetData of addSet){
        console.log(addSetData)
    }
    // Expected output: Aremu, Akinola, Femi

    // Reverse String
    const reverseStr = (str) => [...str].reduce((rev, char) => char + rev, "");
    console.log(reverseStr('Love'));
    // Expected output: evol

    // check If sequence have the same value
    const checkEqual = (arra1, arra2) => arra1.sort().toString() === arra2.sort().toString();
    console.log(checkEqual([12, 'money', 10], [12, 'money', 10]))
    // Expected output: "true"

    const cards = ['Aremu', 1, 'James', 9, 2, 4, 'Femi'];
    const rankCards = {
        'Aremu': 13,
        'James': 14,
        'Femi': 12
    }
    // Convert the numeric to frequence
    const converted = cards.map(card => typeof card === 'string'? rankCards[card]: card);
    // sort the sequence
    const sort = converted.sort((a, b) => a - b);
    
    // Reverse the rankCard to normal order;
    const reverseCard = {
        13: 'Aremu',
        14: 'James',
        12: 'Femi'
    }

    // Final code assign reverseCard to cards to display the items from lowest to highest order
    const result = sort.map(value => reverseCard[value] || value)
    console.log(result);

    // Display only number and ignore the string in asending order 
    const datas = ['12', 2, 'Information', 3, 5, 7, 9, '23', 'Sub'];
    const sortData = datas.filter(data => typeof data === 'number').sort((a,b) => a - b);
    console.log(sortData);

    const items = ['14', 12, 'John', 13, 'King', 4, 6, 8, 2];
    const sortItems = items.filter(item => typeof item === 'number').sort((a, b) => a - b);
    console.log(sortItems)

    const users = [
        { name: "Femi", grade: 9 },
        { name: "Zara", grade: 12 },
        { name: "Tolu", grade: 18 },
        { name: "Tolu", grade: 20 },
        { name: "Tolu", grade: 30 }
    ];
    const sortUsers = users.sort((a, b) => a.grade + b.grade);
    console.log(sortUsers);

    // check lowest value and display them
    const data = [30, 10, 5, 9, 4, 20, 12];
    const minData = data[0];
    for(let i in minData){
        if(i < minData)
             minData = i;
    }
    console.log(minData)

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
    
    console.log(groupedByGrade)
}
task()