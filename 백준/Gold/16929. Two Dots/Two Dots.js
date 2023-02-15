const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = new Array();
const visited = new Array(N).fill(0).map(() => new Array(M).fill(false));
let flag = false;
const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

for (let item of input) {
  map.push(item.split(""));
}

const dfs = (pos, target, count) => {
  if (flag) return;

  for (let mv of move) {
    const [next_n, next_m] = [pos[0] + mv[0], pos[1] + mv[1]];

    if (next_n < 0 || next_n >= N || next_m < 0 || next_m >= M) continue;
    if (map[next_n][next_m] !== map[target[0]][target[1]]) continue;
    if (!visited[next_n][next_m]) {
      visited[next_n][next_m] = true;
      dfs([next_n, next_m], target, count + 1);
      visited[next_n][next_m] = false;
    } else if (count >= 4 && next_n === target[0] && next_m === target[1]) {
      flag = true;
      return;
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    visited[i][j] = true;
    dfs([i, j], [i, j], 1);
    visited[i][j] = false;
  }
}

console.log(flag ? "Yes" : "No");
