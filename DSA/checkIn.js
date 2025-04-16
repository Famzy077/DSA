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
task()