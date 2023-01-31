const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();
const number = Number(input);
let count = 0;
let startNumber = 666;

while (1) {
  if (String(startNumber).includes("666")) {
    count++;
  }
  if (number === count) break;
  startNumber++;
}

console.log(startNumber);
