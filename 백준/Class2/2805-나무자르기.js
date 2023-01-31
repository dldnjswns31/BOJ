const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [test_num, goal] = input[0].split(" ").map((item) => Number(item));
const trees = input[1].split(" ").map((item) => Number(item));

let min = 0;
let max = Math.max(...trees);

while (min <= max) {
  let mid = parseInt((max + min) / 2);
  let sum = 0;
  trees.forEach((item) => {
    if (item > mid) {
      sum += item - mid;
    }
  });

  if (sum >= goal) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
console.log(max);
