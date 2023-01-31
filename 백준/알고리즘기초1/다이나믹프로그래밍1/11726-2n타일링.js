const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();

const num = Number(input);

const dp = new Array(num + 1).fill(0);

for (let i = 1; i <= num; i++) {
  if (i === 1) {
    dp[i] = 1;
    continue;
  }
  if (i === 2) {
    dp[i] = 2;
    continue;
  }

  dp[i] = dp[i - 1] + (dp[i - 2] % 10007);
}

console.log(dp[num] % 10007);
