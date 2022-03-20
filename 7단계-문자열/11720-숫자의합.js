const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");
const tcn = input.shift();
const tc = input[0].split("");
let sum = 0;
for (let i = 0; i < tcn; i++) {
  sum += Number(tc[i]);
}
console.log(sum);
