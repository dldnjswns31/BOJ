const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");
const input1 = Number(input[0]);
const input2 = input[1];
const input3 = input2.split(" ").map((item) => Number(item));
let max = input3[0];
let min = input3[0];

for (let i = 0; i < input1; i++) {
  if (input3[i] > max) {
    max = input3[i];
  } else if (input3[i] < min) {
    min = input3[i];
  }
}
console.log(min, max);
