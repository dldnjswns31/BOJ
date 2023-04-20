const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const arr = input.shift().split(" ").map(Number);
const limit = Number(input.shift());

const sumArr = [0];

for (let item of arr) {
  sumArr.push(sumArr[sumArr.length - 1] + item);
}

const dp = new Array(4).fill(0).map((item) => new Array(sumArr.length).fill(0));

// 이전 기차에서 limit만큼 뺀 승객 + 현재 기차에서 두칸 승객합(승객 태울 때) vs 현재 기차에서 바로 이전 승객합(승객 안태울때)
for (let i = 1; i < dp.length; i++) {
  for (let j = i * limit; j < dp[i].length; j++) {
    dp[i][j] = Math.max(
      dp[i][j - 1],
      dp[i - 1][j - limit] + sumArr[j] - sumArr[j - limit]
    );
  }
}

console.log(Math.max(...dp[3]));
