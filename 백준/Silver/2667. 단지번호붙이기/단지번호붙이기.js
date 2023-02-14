const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const size = Number(input.shift());

const map = [];
const visited = new Array(size).fill(0).map(() => new Array(size).fill(false));
for (let i = 0; i < input.length; i++) {
  let row = input[i].split("").map(Number);
  map.push(row);
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const arr = [];

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      let queue = [[i, j]];
      let count = 0;
      while (queue.length) {
        let length = queue.length;

        for (let k = 0; k < length; k++) {
          let [x, y] = queue.shift();
          if (x < 0 || x >= size || y < 0 || y >= size) continue;
          if (visited[x][y] || map[x][y] === 0) continue;
          count++;
          visited[x][y] = true;
          for (let l = 0; l < 4; l++) {
            queue.push([x + dx[l], y + dy[l]]);
          }
        }
      }
      arr.push(count);
    }
  }
}

arr.sort((a, b) => a - b);

console.log(arr.length);
console.log(arr.join("\n"));
