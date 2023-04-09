const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const items = input.slice(1).map((str) => {
  const [w, v] = str.split(" ").map(Number);
  return { w, v };
});

const dp = Array.from({ length: K + 1 }, () => 0);
for (let i = 0; i < N; i++) {
  const { w, v } = items[i];
  for (let j = K; j >= w; j--) {

    dp[j] = Math.max(dp[j], dp[j - w] + v);

  }
}

console.log(dp[K]);