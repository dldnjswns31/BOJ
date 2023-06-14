const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const dfs = (num, arr) => {
  let cnt = 1;

  visited[num] = true;
  for (let nextNum of arr[num]) {
    if (!visited[nextNum]) {
      cnt += dfs(nextNum, arr);
    }
  }

  return cnt;
};

const [N, M, X] = input[0].split(" ").map(Number);
const up = new Array(N + 1).fill(0).map(() => []);
const down = new Array(N + 1).fill(0).map(() => []);
const visited = new Array(N + 1).fill(false);
let u = 1,
  v = N;

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  up[b].push(a);
  down[a].push(b);
}

u += dfs(X, up) - 1;
v -= dfs(X, down) - 1;

console.log(`${u} ${v}`);