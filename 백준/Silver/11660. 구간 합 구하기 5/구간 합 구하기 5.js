const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.splice(0, N).map((item) => item.split(" ").map(Number));

const prefix = new Array(N + 1).fill(0).map((item) => new Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    prefix[i][j] =
      prefix[i - 1][j] +
      prefix[i][j - 1] -
      prefix[i - 1][j - 1] +
      arr[i - 1][j - 1];
  }
}

let answer = [];

for (let i = 0; i < M; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);

  answer.push(
    prefix[x2][y2] -
      prefix[x1 - 1][y2] -
      prefix[x2][y1 - 1] +
      prefix[x1 - 1][y1 - 1]
  );
}

console.log(answer.join("\n"));
