const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const test_num = input.shift();

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

// 소수 배열의 중간부터 투포인터로 +1 -1 하면서 둘다 소수값이면 break 후 정답.
let answer = [];
input.forEach((x) => {
  for (let i = Math.ceil(x / 2); i > 1; i--) {
    if (primeArray[i] && primeArray[x - i]) {
      answer.push(`${i} ${x - i}`);
      break;
    }
  }
});

console.log(answer.join("\n"));
