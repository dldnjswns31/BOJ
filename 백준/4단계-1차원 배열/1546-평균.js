const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");
let input2 = input[1].split(" ").map((item) => Number(item));
let max = input2[0];
for (let i = 0; i < input2.length; i++) {
  if (input2[i] > max) {
    max = input2[i];
  }
}
input2 = input2.map((item) => (item / max) * 100);
let sum = 0;
for (let i = 0; i < input2.length; i++) {
  sum += input2[i];
}
console.log(sum / input2.length);
