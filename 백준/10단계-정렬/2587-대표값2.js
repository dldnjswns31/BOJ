const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const sortedInput = input.sort((a, b) => a - b);
const sum = sortedInput.reduce((p, c) => Number(p) + Number(c));
const average = sum / sortedInput.length;
const middle = sortedInput[Math.floor(sortedInput.length / 2)];

console.log(`${average}\n${middle}`);
