const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = [...input].map((item) => item.split(" ").map(Number));

// 0: 빈칸 / 1: 벽 / 2: 바이러스

const mapNum = N * M;
const move = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let max = 0;
for (let i = 0; i < mapNum; i++) {
  for (let j = i + 1; j < mapNum; j++) {
    for (let k = j + 1; k < mapNum; k++) {
      const [f, s, t] = [
        [Math.floor(i / M), i % M],
        [Math.floor(j / M), j % M],
        [Math.floor(k / M), k % M],
      ];
      if (
        map[f[0]][f[1]] === 0 &&
        map[s[0]][s[1]] === 0 &&
        map[t[0]][t[1]] === 0
      ) {
        map[f[0]][f[1]] = 1;
        map[s[0]][s[1]] = 1;
        map[t[0]][t[1]] = 1;
        const newMap = map.map((item) => [...item]);
        max = Math.max(max, spread(newMap));
        map[f[0]][f[1]] = 0;
        map[s[0]][s[1]] = 0;
        map[t[0]][t[1]] = 0;
      }
    }
  }
}

function spread(newMap) {
  const queue = [];
  let queueIdx = 0;
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (newMap[i][j] === 2) queue.push([i, j]);
    }
  }

  while (queueIdx < queue.length) {
    const [n, m] = queue[queueIdx];
    queueIdx++;
    for (let mv of move) {
      const [nextN, nextM] = [n + mv[0], m + mv[1]];

      if (
        nextN < N &&
        nextN >= 0 &&
        nextM < M &&
        nextM >= 0 &&
        newMap[nextN][nextM] === 0
      ) {
        newMap[nextN][nextM] = 2;
        queue.push([nextN, nextM]);
      }
    }
  }

  newMap.forEach((item) =>
    item.forEach((item2) => {
      if (item2 === 0) count++;
    })
  );
  return count;
}

console.log(max);
