// Find the minimum number in an array
let indexs = [10, 13, 5, 19, 2, 7, 3]
let minIndex = indexs[0];
for(let e in indexs){
    if(e < minIndex){
        minIndex = e;
    }
}
console.log('Lowest value: ' + minIndex);

// let checkLowest = [10, 13, 5, 19, 2, 7, 3];
// let minValue = checkLowest[0];

// for (let e in checkLowest) {
//   if (e < minValue) {
//     minValue = e;
//   }
// }

// console.log('Lowest value: ' + minValue);
