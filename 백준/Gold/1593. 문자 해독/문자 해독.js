const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [g, s] = input.shift().split(" ").map(Number);
const W = input.shift();
const S = input.shift();
const maya = {};

for (let i of W) {
  if (maya[i]) maya[i] += 1;
  else maya[i] = 1;
}

let prev = 0;
let answer = 0;

// 미리 만들어둔거에서 앞뒤 한개씩만 더해주고 빼고 체크

for (let i = 0; i < g; i++) {
  if (maya[S[i]] !== undefined) {
    maya[S[i]] -= 1;
  }
}
let isBreak = false;
for (let key in maya) {
  if (maya[key] !== 0) {
    isBreak = true;
    break;
  }
}

if (!isBreak) {
  answer++;
}

for (let i = g; i < s; i++) {
  let prevStr = S[prev];
  if (maya[prevStr] !== undefined) {
    maya[prevStr] += 1;
  }

  if (maya[S[i]] !== undefined) {
    maya[S[i]] -= 1;
  }

  let isBreak = false;
  for (let key in maya) {
    if (maya[key] !== 0) {
      isBreak = true;
      break;
    }
  }

  if (!isBreak) answer++;
  prev++;
}

console.log(answer);
