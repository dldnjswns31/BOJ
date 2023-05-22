const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();

let answer = [];

for (let item of input) {
  let count = 1;
  for (let str of item) {
    if (str === "1") {
      count += 2;
    } else if (str === "0") {
      count += 4;
    } else {
      count += 3;
    }
    count++;
  }

  answer.push(count);
}

console.log(answer.join("\n"));
