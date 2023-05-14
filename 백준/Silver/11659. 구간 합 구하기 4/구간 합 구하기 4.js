const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
const prefix = [0];

for (let i = 0; i < arr.length; i++) {
  prefix.push(prefix[i] + arr[i]);
}

const TC = input.map((item) => item.split(" ").map(Number));
const answer = [];
for (let tc of TC) {
  const [start, end] = tc;
  answer.push(prefix[end] - prefix[start - 1]);
}

console.log(answer.join("\n"));
