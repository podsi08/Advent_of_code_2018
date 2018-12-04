var fs = require('fs')
var path = require('path');

const data = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');
const dataArray = data.split('\n');

// part 1
let twoLettersCodes = 0;
let threeLettersCodes = 0;

dataArray.forEach(element => {
    let letterStats = {};
    for (let i = 0; i < element.length; i++) {
        if (letterStats[element[i]]) {
            letterStats[element[i]] += 1;
        } else {
            letterStats[element[i]] = 1;
        }
    }
    
    Object.values(letterStats).find(item => item === 2) && (twoLettersCodes += 1);
    Object.values(letterStats).find(item => item === 3) && (threeLettersCodes += 1);
});

console.log(threeLettersCodes * twoLettersCodes)
    
// part2
dataArray.forEach((element1, index) => {
    for (let j = index + 1; j < dataArray.length; j++) {
        let element2 = dataArray[j];
        let differentLetters = 0;
        for (let k = 0; k < element2.length; k++) {
            if (element2[k] !== element1[k]) {
                differentLetters += 1;
            }
            if (differentLetters > 1) {
                break;
            }
        }
        if (differentLetters === 1) {
            let result2 = '';
            for (let letterIndex1 = 0; letterIndex1 < element1.length; letterIndex1++) {
                if (element1[letterIndex1] === element2[letterIndex1]) {
                    result2 += element1[letterIndex1];
                }
            }
            console.log(result2);
        }
    }
})