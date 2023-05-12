const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let max = 0;
const arr = input.map((item) => {
  item = item.split("");
  max = Math.max(max, item.length);
  return item;
});

let answer = [];

for (let i = 0; i < max; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length <= i) continue;
    answer.push(arr[j][i]);
  }
}

console.log(answer.join(""));
