const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [C, N] = input.shift().split(" ").map(Number);
const arr = input
  .map((item) => item.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0]);

// dp의 기준: 해당 고객 수만큼 홍보하는데 필요한 최소 비용
const dp = new Array(C + 1).fill(Infinity);

for (let i = 0; i < arr.length; i++) {
  const [cost, people] = arr[i];
  // 해당 인원(people)의 메모된 비용(dp[people])이 해당 비용(cost)보다 높다면 메모 갱신
  if (dp[people] > cost) dp[people] = cost;
  // dp 순회 시작
  // 해당 고객 수(dp index)가 현재 도시의 인원(people)보다 작다면 현재 메모된 비용과 현재 도시의 비용중 최소값을 저장
  // -> 홍보 인원은 초과해도 상관없기 때문
  // 크다면 현재 메모된 비용과 현재 홍보 인원 메모된 비용 + (해당 고객 수 - 현재 홍보 인원) 메모된 비용의 최소값을 저장
  for (let j = 1; j <= C; j++) {
    dp[j] =
      j < people
        ? Math.min(dp[j], cost)
        : Math.min(dp[j], dp[people] + dp[j - people]);
  }
}

console.log(dp[C]);
