const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();

const MOD = 10007;
const test_case = Number(input);

const dp = new Array(10).fill(1);

for (let i = 1; i < test_case; i++) {
  let copy_dp = [...dp];
  for (let j = 0; j < 10; j++) {
    dp[j] = copy_dp.slice(0, j + 1).reduce((a, c) => (a + c) % MOD);
  }
}

console.log(dp.reduce((a, c) => (a + c) % MOD));
