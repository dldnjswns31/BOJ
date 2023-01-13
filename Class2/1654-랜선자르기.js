const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [test_num, goal_num] = input.shift().split(" ");

let min = 1;
let max = Math.max(...input);

while (min <= max) {
  let mid = parseInt((max + min) / 2);
  let pieces = input
    .map((line) => parseInt(line / mid))
    .reduce((a, b) => a + b, 0);
  if (pieces >= goal_num) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);
