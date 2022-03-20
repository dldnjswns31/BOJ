const fs = require("fs");
const input = fs
  .readFileSync("../ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item) % 42);
let array = [];

for (let i = 0; i < 10; i++) {
  if (array.indexOf(input[i]) === -1) {
    array.push(input[i]);
  }
}

console.log(array.length);
