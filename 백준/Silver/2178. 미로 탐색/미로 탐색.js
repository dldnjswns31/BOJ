const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = new Array(N);

for (let i = 0; i < N; i++) {
  map[i] = input[i].split("").map(Number);
}

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const target = [N - 1, M - 1];
const queue = [[0, 0]];
let count = 0;

while (queue.length) {
  count++;
  const length = queue.length;
  for (let i = 0; i < length; i++) {
    const [x, y] = queue.shift();
    if (x < 0 || x >= N || y < 0 || y >= M) continue;
    if (map[x][y] === 0) continue;
    map[x][y] = 0;

    if (x === target[0] && y === target[1]) console.log(count);

    for (let j = 0; j < 4; j++) {
      queue.push([x + dx[j], y + dy[j]]);
    }
  }
}
