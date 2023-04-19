const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const dp = new Array(N + 1).fill(0);
const arr = input.shift().split(" ").map(Number);

let max = 0;
for (let i = 1; i <= N; i++) {
  const num = arr[i - 1];
  dp[num] = dp[num - 1] + 1;
  max = Math.max(dp[num], max);
}

console.log(N - max);
