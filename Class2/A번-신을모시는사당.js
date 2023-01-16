const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const test_num = input.shift();
const test_case = input
  .shift()
  .split(" ")
  .map((item) => Number(item))
  .map((item) => {
    if (item === 1) return 1;
    else return -1;
  });

if (test_num === 1) return 1;

for (let i = 1; i < test_num; i++) {
  test_case[i] = test_case[i] + test_case[i - 1];
}

const max = Math.max(...test_case);
const min = Math.min(...test_case);

if (min > 0) {
  console.log(max);
} else {
  console.log(max - min);
}
