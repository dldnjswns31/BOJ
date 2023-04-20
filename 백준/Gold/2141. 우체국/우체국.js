const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const arr = input
  .map((item) => item.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0]);

const total = arr.reduce((a, c) => a + c[1], 0);
let sum = 0;
let index;
for (let item of arr) {
  index = item[0];
  sum += item[1];

  if (sum >= total / 2) break;
}

console.log(index);
