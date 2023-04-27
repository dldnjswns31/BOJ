const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const arr = input
  .shift()
  .split(" ")
  .sort((a, b) => b + a - (a + b));

const answer = arr.join("");

if ("0".repeat(N) === answer) {
  console.log(0);
} else {
  console.log(answer);
}
