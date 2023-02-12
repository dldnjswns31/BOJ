const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

let start = Number(input.shift());
let target = Number(input.shift());

if (start === target) return console.log(0);

let queue = [start];
let visited = new Array(100001).fill(false);
visited[start] = true;
let count = 0;
while (queue.length) {
  let length = queue.length;
  count++;
  for (let i = 0; i < length; i++) {
    let cur = queue.shift();
    for (let next of [cur + 1, cur - 1, cur * 2]) {
      if (next === target) {
        return console.log(count);
      }
      if (!visited[next] && next >= 0 && next <= 100000) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
}
