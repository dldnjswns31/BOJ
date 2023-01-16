const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().split("");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();
const answer = [];

for (let str of input) {
  if (upper.includes(str)) {
    const index = upper.indexOf(str);
    if (index > 12) {
      answer.push(upper[index - 13]);
    } else {
      answer.push(upper[index + 13]);
    }
  } else if (lower.includes(str)) {
    const index = lower.indexOf(str);
    if (index > 12) {
      answer.push(lower[index - 13]);
    } else {
      answer.push(lower[index + 13]);
    }
  } else {
    answer.push(str);
  }
}

console.log(answer.join(""));
