const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [L, N, K] = input.shift().split(" ").map(Number);
const arr = [0, ...input.shift().split(" ").map(Number), L].sort(
  (a, b) => a - b
);

let left = 1;
let right = 200000;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let count = 0;
  let used = 0;
  let isBreak = false;

  for (let i = 0; i < arr.length - 1; i++) {
    const cur = arr[i];
    const next = arr[i + 1];
    const distance = next - cur;

    // 다음 충전소와의 거리가 배터리보다 크면 안됨
    // 배터리의 용량을 늘려줌
    if (distance > mid) {
      isBreak = true;
      break;
    }

    if (used + distance > mid) {
      count++;
      used = distance;
    } else {
      used += distance;
    }
  }
  if (isBreak) {
    left = mid + 1;
    continue;
  }

  if (count > K) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(left);
