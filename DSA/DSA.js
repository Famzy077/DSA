const SortArray = () => {
    const cards = ["Jack", 8, 2, 2, 6, "King", 5, 3, 'Queen', 'King', 'Queen'];

    // Define a rank for the face cards
    const rankMap = {
        'Jack': 12,
        'Queen': 13,
        'King': 14
    };

    // Convert all values to their numeric equivalents
    const converted = cards.map(card => typeof card === 'string' ? rankMap[card] : card);

    // Sort them numerically
    const sorted = converted.sort((a, b) => a - b);

    // Optional: convert back to original names for display
    const reverseMap = {
        12: 'Jack',
        13: 'Queen',
        14: 'King'
    };

    const final = sorted.map(value => reverseMap[value] || value);

    console.log(final);
    // Out put 2,2,3,5,6,8, 'Jack', 'Queen', 'King', 'Queen', 'King'
} 
SortArray();