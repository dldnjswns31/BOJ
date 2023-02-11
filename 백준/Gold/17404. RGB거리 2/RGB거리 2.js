const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const test_num = input.shift();
const test_case = input.map((item) => item.split(" ").map(Number));
const min_arr = [];
for (let i = 0; i < 3; i++) {
  let dp = new Array(test_num).fill(0).map(() => new Array(3));
  dp[0] = test_case[0];

  dp[0] = dp[0].map((v, idx) => {
    if (idx !== i) return (v = 1001 * 1001);
    else return v;
  });
  for (let j = 1; j < test_num; j++) {
    dp[j] = [];
    dp[j][0] = Math.min(dp[j - 1][1], dp[j - 1][2]) + test_case[j][0];
    dp[j][1] = Math.min(dp[j - 1][2], dp[j - 1][0]) + test_case[j][1];
    dp[j][2] = Math.min(dp[j - 1][0], dp[j - 1][1]) + test_case[j][2];
  }
  dp[test_num - 1][i] = 1001 * 1001;
  min_arr.push(Math.min(...dp[test_num - 1]));
}

console.log(Math.min(...min_arr));
