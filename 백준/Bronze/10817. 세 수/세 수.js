const fs = require('fs');
const filePath = '/dev/stdin';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number).sort((a,b) => a-b);

console.log(input[1])