const fs = require("fs");
const input = fs
  .readFileSync("../ex.txt")
  .toString()
  .split("\n")
  .map((item) => Number(item));

let max = input[0];
let cycle = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] > max) {
    max = input[i];
    cycle = i + 1;
  }
}
console.log(max);
console.log(cycle);
