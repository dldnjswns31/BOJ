const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input.shift();
const count = {};

for (let i = 0; i < num; i++) {
  if (count[input[i]]) {
    count[input[i]] += 1;
  } else {
    count[input[i]] = 1;
  }
}

let answer = "";

for (let key in count) {
  for (let i = 0; i < count[key]; i++) {
    answer += `${key}\n`;
  }
}

console.log(answer.trim());
