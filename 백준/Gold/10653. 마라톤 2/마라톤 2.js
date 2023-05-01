const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const course = input.map((item) => item.split(" ").map(Number));

function MD(start, end) {
  return Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1]);
}

if (N - K <= 2) {
  console.log(MD(course[0], course[course.length - 1]));
} else {
  const dp = new Array(K + 1)
    .fill(0)
    .map((item) => new Array(N).fill(Infinity));

  dp[0][0] = 0;
  for (let i = 1; i < N; i++) {
    dp[0][i] = dp[0][i - 1] + MD(course[i], course[i - 1]);
  }

  for (let i = 1; i < K + 1; i++) {
    dp[i][0] = 0;
    dp[i][1] = dp[i - 1][1];
    for (let j = 1; j < N; j++) {
      for (let k = i; k >= 0; k--) {
        if (j - k - 1 < 0) continue;
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i - k][j - k - 1] + MD(course[j], course[j - k - 1]),
          dp[i][j - 1] + MD(course[j - 1], course[j])
        );
      }
    }
  }
  console.log(dp[K][N - 1]);
}
