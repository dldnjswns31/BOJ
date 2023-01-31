const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const MOD = 9901;
const test_num = Number(input.shift());

for (let i = 0; i < test_num; i++) {
  const num = Number(input.shift());
  const up = input.shift().split(" ").map(Number);
  const down = input.shift().split(" ").map(Number);
  const dp = new Array(num + 1).fill(0).map(() => new Array(3));
  dp[1] = [0, up[0], down[0]];

  for (let j = 2; j <= num; j++) {
    dp[j][0] = Math.max(dp[j - 1][0], dp[j - 1][1], dp[j - 1][2]);
    dp[j][1] = up[j - 1] + Math.max(dp[j - 1][0], dp[j - 1][2]);
    dp[j][2] = down[j - 1] + Math.max(dp[j - 1][0], dp[j - 1][1]);
  }
  console.log(Math.max(...dp[num]));
}
