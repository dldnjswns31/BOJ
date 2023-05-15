const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const map = input.map((item) => item.split(" ").map(Number));
const dp = new Array(N).fill(0).map((item) => new Array(N).fill(-1));
const move = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

// 각 칸에서 최대로 진행할 수 있는 숫자 저장
// 진행하면서 memo된 칸을 만날경우 바로 return

function dfs(position) {
  const [x, y] = position;

  if (dp[x][y] === -1) {
    dp[x][y] = 0;

    for (let mv of move) {
      const [nextX, nextY] = [x + mv[0], y + mv[1]];

      if (
        nextX >= 0 &&
        nextX < N &&
        nextY >= 0 &&
        nextY < N &&
        map[nextX][nextY] > map[x][y]
      ) {
        dp[x][y] = Math.max(dp[x][y], dfs([nextX, nextY]));
      }
    }
  }

  return dp[x][y] + 1;
}

let max = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    max = Math.max(max, dfs([i, j]));
  }
}

console.log(max);
