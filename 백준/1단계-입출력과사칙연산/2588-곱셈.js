const fs = require("fs");
const input = fs.readFileSync("../예제.txt").toString().split("\n");
const a = parseInt(input[0]);
const b = input[1].split("");
const b1 = parseInt(b[0]);
const b2 = parseInt(b[1]);
const b3 = parseInt(b[2]);

console.log(a * b3);
console.log(a * b2);
console.log(a * b1);
console.log(a * parseInt(`${b1}${b2}${b3}`));
