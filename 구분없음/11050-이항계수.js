const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const n = input[0];
const k = input[1];

function factorial(n) {
  let num = 1;
  while (n > 0) {
    num = num * n;
    n--;
  }
  return num;
}

function binomial(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

console.log(binomial(n, k));
