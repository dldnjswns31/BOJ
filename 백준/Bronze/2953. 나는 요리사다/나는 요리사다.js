const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = 0;
let max = 0;

for (let i = 0; i < input.length; i++) {
  const sum = input[i]
    .split(" ")
    .map(Number)
    .reduce((a, c) => a + c);

  if (max < sum) {
    num = i + 1;
    max = sum;
  }
}

console.log(`${num} ${max}`);
