const fs = require('fs');
const filePath = '/dev/stdin';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const answer = [];

for(let item of input) {
    if(item === '***') break;
    item = item.split('').reverse().join('');
    answer.push(item)
}

console.log(answer.join('\n'))