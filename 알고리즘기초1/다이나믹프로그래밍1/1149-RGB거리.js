const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const test_num = input.shift();
const test_case = input.map((item) => item.split(" ").map(Number));

const dp = new Array(Number(test_num) + 1)
  .fill(0)
  .map((item) => new Array(3).fill(0));
dp[1] = test_case[0];

for (let i = 2; i <= test_num; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + test_case[i - 1][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + test_case[i - 1][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + test_case[i - 1][2];
}

console.log(Math.min(...dp[test_num]));
