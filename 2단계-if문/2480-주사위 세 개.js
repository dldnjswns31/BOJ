// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.

const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split(" ");
const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b) {
  console.log(1000 + a * 100);
} else if (b === c) {
  console.log(1000 + b * 100);
} else if (c === a) {
  console.log(1000 + c * 100);
} else {
  console.log(Math.max(a, b, c) * 100);
}
