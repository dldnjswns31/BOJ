const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim()

const N = Number(input);
const divide = input/4;
const answer = [];

for(let i=0; i<divide; i++) {
    answer.push('long')
}
answer.push('int')

console.log(answer.join(' '))