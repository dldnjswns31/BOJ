const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const arr = input.shift().split(" ").map(Number);

// dp 두개 만들어서 체크하고 가장 큰 값 찾기
const dp1 = [arr[0] === 1 ? 1 : -1];
const dp2 = [arr[0] === 2 ? 1 : -1];

for (let i = 1; i < arr.length; i++) {
  const num = arr[i];
  if (num === 1) {
    if (dp1[i - 1] >= 0) {
      dp1[i] = dp1[i - 1] + 1;
    } else {
      dp1[i] = 1;
    }
  } else {
    dp1[i] = dp1[i - 1] - 1;
  }
}

for (let i = 1; i < arr.length; i++) {
  const num = arr[i];
  if (num === 2) {
    if (dp2[i - 1] >= 0) {
      dp2[i] = dp2[i - 1] + 1;
    } else {
      dp2[i] = 1;
    }
  } else {
    dp2[i] = dp2[i - 1] - 1;
  }
}

N === 1 ? console.log(1) : console.log(Math.max(...dp1, ...dp2));
