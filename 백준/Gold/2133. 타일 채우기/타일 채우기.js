const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

if (N % 2 === 1) return console.log(0);

const dp = new Array(N + 1).fill(0);

dp[0] = 1;
dp[2] = 3;

for (let i = 4; i <= N; i += 2) {
  dp[i] = dp[i - 2] * 3;

  for (let j = 4; j <= i; j += 2) {
    dp[i] += dp[i - j] * 2;
  }
}

console.log(dp[N]);
