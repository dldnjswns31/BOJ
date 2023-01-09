const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const candidate = input[0].split(" ")[0];
const prizeLimit = input[0].split(" ")[1];
const sortedScore = input[1].split(" ").sort((a, b) => b - a);
console.log(sortedScore[prizeLimit - 1]);
