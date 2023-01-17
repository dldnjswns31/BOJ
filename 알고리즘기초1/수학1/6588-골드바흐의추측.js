const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

// 에라토스테네스의 체
const max = Math.max(...input);
let primeArray = new Array(max + 1).fill(true);
primeArray[0] = primeArray[1] = false;
for (let i = 2; i < Math.sqrt(max + 1); i++) {
  if (primeArray[i]) {
    for (let j = 2; i * j < max + 1; j++) {
      primeArray[i * j] = false;
    }
  }
}

let answer = [];
input.forEach((x) => {
  let isBreak = false;
  for (let i = x; i > 1; i--) {
    if (primeArray[i] && primeArray[x - i]) {
      answer.push(`${x - i} ${i}`);
      isBreak = true;
      break;
    }
  }
  if (!isBreak) answer.push("Goldbach's conjecture is wrong.");
});

answer = answer.map((item) => item.split(" ").map(Number));
for (let item of answer) {
  console.log(`${item[0] + item[1]} = ${item[0]} + ${item[1]}`);
}
