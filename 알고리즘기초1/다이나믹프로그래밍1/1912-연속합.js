const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const test_num = Number(input.shift());
const test_case = input.shift().split(" ").map(Number);

const dp = new Array(test_num).fill(0);
dp[0] = test_case[0];

for (let i = 1; i < test_num; i++) {
  dp[i] = Math.max(dp[i - 1] + test_case[i], test_case[i]);
}

console.log(Math.max(...dp));
