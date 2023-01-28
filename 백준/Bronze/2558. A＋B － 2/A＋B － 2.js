const fs = require('fs');
const [n,m] = fs.readFileSync('/dev/stdin').toString().split('\n');

console.log(Number(n)+Number(m))