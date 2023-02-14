const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input.shift().split(" ").map(Number);

const box = new Array();
const queue = [];
let count = -1;

for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(" ").map(Number);
  box[i] = arr;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 1) {
      queue.push([i, j]);
    }
  }
}

const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let queue_idx = 0;
let queue_cnt = queue.length;

while (queue.length) {
  let isChange = false;
  const length = queue_cnt;
  queue_cnt = 0;
  count++;
  for (let i = 0; i < length; i++) {
    let [n, m] = queue[queue_idx];
    for (let mv of move) {
      let [dn, dm] = mv;
      let next_n = n + dn;
      let next_m = m + dm;

      if (next_n >= 0 && next_n < N && next_m >= 0 && next_m < M) {
        if (!box[next_n][next_m]) {
          queue.push([next_n, next_m]);
          box[next_n][next_m] = 1;
          queue_cnt++;
          isChange = true;
        }
      }
    }
    queue_idx++;
  }

  if (!isChange) break;
}

for (let i = 0; i < N; i++) {
  if (box[i].includes(0)) {
    return console.log(-1);
  }
}

console.log(count);
