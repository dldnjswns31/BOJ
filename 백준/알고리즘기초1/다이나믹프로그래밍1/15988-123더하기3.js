const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const test_num = input.shift();
const test_case = input.map(Number);
const max = Math.max(...test_case);
const MOD = 1000000009;

const dp = new Array(max + 1).fill(0);
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
const answer = [];

function dpFn(num) {
  if (dp[num]) {
    return dp[num];
  } else {
    return (dpFn(num - 1) + dpFn(num - 2) + dpFn(num - 3)) % MOD;
  }
}

for (let item of test_case) {
  answer.push(dpFn(item));
}

console.log(answer.join("\n"));
