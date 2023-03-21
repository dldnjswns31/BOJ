const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();
const [N, K] = input.split("\n").map(Number);

let left = 1;
let right = K;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let count = 0;

  for (let i = 1; i <= N; i++) {
    let divide = Math.floor(mid / i);
    divide >= N ? (count += N) : (count += divide);
  }

  if (count >= K) right = mid - 1;
  else left = mid + 1;
}

console.log(left);
