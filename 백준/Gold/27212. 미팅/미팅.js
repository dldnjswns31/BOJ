const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, C] = input.shift().split(" ").map(Number);
const satisfaction = [new Array(C + 1).fill(0)];

for (let i = 0; i < C; i++) {
  const cur = input.shift().split(" ").map(Number);
  satisfaction.push([0, ...cur]);
}

const NArr = [0, ...input.shift().split(" ").map(Number)];
const MArr = [0, ...input.shift().split(" ").map(Number)];

const dp = new Array(N + 1).fill(0).map((_) => new Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    dp[i][j] = Math.max(
      dp[i][j - 1],
      dp[i - 1][j],
      dp[i - 1][j - 1] + satisfaction[NArr[i]][MArr[j]]
    );
  }
}

console.log(Math.max(...dp[dp.length - 1]));
