const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const items = input.map((item) => {
  return item.split(" ").map(Number);
});

const dp = new Array(K + 1).fill(0);

for (let i = 0; i < items.length; i++) {
  const [w, v] = items[i];
  for (let j = K; j >= w; j--) {
    dp[j] = Math.max(dp[j], dp[j - w] + v);
  }
}

console.log(dp[K]);
