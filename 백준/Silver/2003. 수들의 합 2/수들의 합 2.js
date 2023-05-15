const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
const prefix = [0];

for (let i = 0; i < N; i++) {
  prefix.push(arr[i] + prefix[i]);
}

let left = 0;
let right = 1;
let answer = 0;

while (left <= right && right <= N) {
  const num = prefix[right] - prefix[left];
  if (num === M) {
    answer++;
  }

  if (num >= M) left++;
  else right++;
}

console.log(answer);
