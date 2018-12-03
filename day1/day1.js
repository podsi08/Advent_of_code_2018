var fs = require('fs')
var path = require('path');

const data = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');
const dataArray = data.split('\n');

// part 1
let result1 = 0;

// dataArray.forEach((numb) => {
//     if (numb[0] === '+') {
//         result1 += parseInt(numb.slice(1));
//     } else {
//         result1 -= parseInt(numb.slice(1))
//     }
// })

// console.log(result1)

// part 2
const countPart2Result = () => {
    let result2 = 0;
    const frequencySet = new Set([0]);
    let counting = true;
    while (counting) {
        dataArray.forEach((numb) => {
            if (counting) {
                if (numb[0] === '+') {
                    result2 += parseInt(numb.slice(1));
                } else {
                    result2 -= parseInt(numb.slice(1));
                }
        
                if (frequencySet.has(result2)) {
                    counting = false;
                    return result2;
                }
                frequencySet.add(result2);
            }
        })
    }
    return result2
}

console.log(countPart2Result())

