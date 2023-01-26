const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const test_num = Number(input.shift());
const test_case = ["0", ...input].map((item) => item.split(" ").map(Number));

const dp = new Array(test_num + 1);
dp[1] = [test_case[1][0]];

for (let i = 2; i <= test_num; i++) {
  const arr = [];
  for (let j = 0; j < i; j++) {
    if (j === 0) {
      arr[0] = dp[i - 1][0] + test_case[i][0];
    } else if (j === i - 1) {
      arr[j] = dp[i - 1][j - 1] + test_case[i][j];
    } else {
      arr[j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + test_case[i][j];
    }
    dp[i] = arr;
  }
}

console.log(Math.max(...dp[test_num]));
