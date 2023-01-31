const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const test_num = Number(input.shift());
const test_case = input.shift().split(" ").map(Number);

const dp = [0].concat(test_case);

for (let i = 1; i <= test_num; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j] + test_case[j - 1]);
  }
}

console.log(dp[test_num]);
