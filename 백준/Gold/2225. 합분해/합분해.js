const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;
const MOD = 1000000000;
const dp = new Array(K).fill(0).map(() => new Array());
dp[0] = new Array(N + 1).fill(1);

for (let i = 1; i < K; i++) {
  for (let j = 0; j <= N; j++) {
    let sum = 0;

    for (let m = 0; m <= j; m++) {
      sum += dp[i - 1][m];
    }

    dp[i][j] = sum % MOD;
  }
}

console.log(dp[K - 1][N] % MOD);
