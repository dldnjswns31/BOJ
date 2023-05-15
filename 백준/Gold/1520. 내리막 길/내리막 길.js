const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((item) => item.split(" ").map(Number));
const dp = new Array(N).fill(0).map((item) => new Array(M).fill(-1));
dp[N - 1][M - 1] = 1;

const move = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function dfs(position) {
  const [x, y] = position;
  let count = 0;
  if (dp[x][y] !== -1) {
    return dp[x][y];
  }

  for (let mv of move) {
    const [nextX, nextY] = [x + mv[0], y + mv[1]];

    if (
      nextX >= 0 &&
      nextX < N &&
      nextY >= 0 &&
      nextY < M &&
      map[x][y] > map[nextX][nextY]
    ) {
      count += dfs([nextX, nextY]);
    }
  }

  dp[x][y] = count;
  return count;
}

dfs([0, 0]);

console.log(dp[0][0]);
