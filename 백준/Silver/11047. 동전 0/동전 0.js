const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [tc, target] = input.shift().split(" ").map(Number);
const money = [];

for (let i = 0; i < tc; i++) {
  money.push(Number(input[i]));
}
money.sort((a, b) => b - a);

let answer = 0;
let cur = 0;

for (let item of money) {
  if (item > target - cur) continue;
  let count = parseInt((target - cur) / item);
  answer += count;
  cur += item * count;
}

console.log(answer);
