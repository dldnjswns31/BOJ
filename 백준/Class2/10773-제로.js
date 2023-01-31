const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

const test_num = input.shift();
const stack = [];
for (let money of input) {
  if (money === 0) {
    stack.pop();
  } else {
    stack.push(money);
  }
}

let sum = 0;
stack.forEach((item) => (sum += item));
console.log(sum);
