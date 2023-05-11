const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../ex.txt';
const [A,B] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
console.log(Math.abs(A-B));