const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [H, W] = input.shift().split(" ").map(Number);
const map = input.map((item) => item.split(" ").map(Number));
let answer = 0;

const move = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const queue = [];
let queueIdx = 0;

function bfs() {
  while (queueIdx !== queue.length) {
    const [h, w] = queue[queueIdx];
    queueIdx++;

    for (let mv of move) {
      const [nextX, nextY] = [w + mv[0], h + mv[1]];
      const [convertX, convertY] = convert(nextX, nextY, W, H);

      if (map[convertY][convertX] === 0) {
        map[convertY][convertX] = 1;
        queue.push([convertY, convertX]);
      }
    }
  }
}

function convert(x, y, w, h) {
  if (x < 0) return [w - 1, y];
  if (x >= W) return [0, y];
  if (y < 0) return [x, h - 1];
  if (y >= H) return [x, 0];
  return [x, y];
}

for (let h = 0; h < H; h++) {
  for (let w = 0; w < W; w++) {
    if (map[h][w] === 0) {
      answer++;
      map[h][w] = 1;
      queue.push([h, w]);
      bfs();
    }
  }
}

console.log(answer);
