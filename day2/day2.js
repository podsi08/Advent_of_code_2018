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
    
