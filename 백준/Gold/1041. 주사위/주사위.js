const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const arr = input.shift().split(" ").map(Number);

//   3
// 4 0 1 5
//   2
const three = Math.min(
  ...[
    arr[0] + arr[1] + arr[2],
    arr[0] + arr[2] + arr[4],
    arr[0] + arr[3] + arr[4],
    arr[0] + arr[1] + arr[3],
    arr[5] + arr[1] + arr[2],
    arr[5] + arr[2] + arr[4],
    arr[5] + arr[3] + arr[4],
    arr[5] + arr[1] + arr[3],
  ]
);

const two = Math.min(
  ...[
    arr[0] + arr[1],
    arr[0] + arr[2],
    arr[0] + arr[3],
    arr[0] + arr[4],
    arr[5] + arr[1],
    arr[5] + arr[2],
    arr[5] + arr[3],
    arr[5] + arr[4],
    arr[1] + arr[2],
    arr[2] + arr[4],
    arr[4] + arr[3],
    arr[3] + arr[1],
  ]
);

const one = Math.min(...arr);

if (N >= 2) {
  let answer = 0;
  answer += three * 4;
  answer += two * (8 * N - 12);
  answer += one * (5 * N ** 2 - 16 * N + 12);

  console.log(answer);
} else {
  let max = Math.max(...arr);
  let sum = arr.reduce((a, c) => a + c);
  let answer = sum - max;
  console.log(answer);
}
