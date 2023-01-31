const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();

const test_case = Number(input);
const dp = new Array(test_case + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= test_case; i++) {
  for (let j = 1; j ** 2 <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1);
  }
}

console.log(dp[test_case]);
