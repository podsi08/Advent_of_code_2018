var express = require('express');
var app = express();
var fs = require('fs')
var path = require('path');

app.get('/', function(req, res){
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

    // res.sendStatus(result1);

    // part 2
    let result2 = 0;
    const frequencySet = new Set([0]);
    let counting = true;

    while (counting) {
        dataArray.forEach((numb) => {
            if (numb[0] === '+') {
                result2 += parseInt(numb.slice(1));
            } else {
                result2 -= parseInt(numb.slice(1));
            }

            if (frequencySet.has(result2)) {
                counting = false;
                res.sendStatus(result2);
            }
            frequencySet.add(result2);
        })
    }  
})

app.listen(3001, function(){
    console.log('App listening on port 3001')
})