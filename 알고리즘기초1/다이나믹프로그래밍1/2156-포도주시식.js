const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const test_num = Number(input.shift());
const test_case = [0, ...input].map(Number);

const dp = new Array(test_num + 1).fill(0).map(() => new Array(3).fill(0));
dp[1] = [0, test_case[1], 0];

for (let i = 2; i <= test_num; i++) {
  dp[i][0] = Math.max(...dp[i - 1]);
  dp[i][1] = dp[i - 1][0] + test_case[i];
  dp[i][2] = dp[i - 1][1] + test_case[i];
}

console.log(Math.max(...dp[test_num]));
