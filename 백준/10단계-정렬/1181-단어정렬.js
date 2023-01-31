const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// a.localeCompare(b) => a와 b의 사전상 순서를 비교하여 1, 0, -1을 반환한다.
const num = input.shift();

const removeDuplicated = Array.from(new Set(input));

console.log(
  removeDuplicated
    .sort((a, b) => a.localeCompare(b))
    .sort((a, b) => a.length - b.length)
    .join("\n")
);
