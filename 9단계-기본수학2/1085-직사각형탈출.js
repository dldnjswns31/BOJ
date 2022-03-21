const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item));
const [x, y, w, h] = input;
const array = [w - x, x - 0, h - y, y - 0];
const min = Math.min(...array);
console.log(min);
