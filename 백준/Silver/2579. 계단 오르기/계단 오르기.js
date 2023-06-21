const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();
const stairs = [0, ...input];
const dp = new Array(N + 1).fill(0).map((item) => new Array());
dp[0] = [0, 0, 0];
dp[1] = [0, stairs[1], 0];

// [안밟았을때, 1칸일때, 2칸일때]
// 안밟았을 때 = 이전 계단 1칸일때와 2칸일때 중 maximum
// 1칸일 때 = 현재 계단값 + 이전 계단 안밟았을때
// 2칸일 때 = 현재 계단값 + 이전 계단 1칸일때
for (let i = 2; i < dp.length; i++) {
  dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = dp[i - 1][0] + stairs[i];
  dp[i][2] = dp[i - 1][1] + stairs[i];
}

console.log(Math.max(dp[N - 1][0], dp[N - 1][1]) + stairs[N]);
