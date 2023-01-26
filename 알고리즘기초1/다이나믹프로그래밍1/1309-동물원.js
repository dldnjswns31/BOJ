const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();

const MOD = 9901;
const test_case = Number(input);

const dp = new Array(test_case + 1).fill(0).map(() => new Array(3));
dp[1] = [1, 1, 1];

for (let i = 2; i <= test_case; i++) {
  dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % MOD;
  dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;
  dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % MOD;
}

console.log(dp[test_case].reduce((a, c) => a + c) % MOD);
