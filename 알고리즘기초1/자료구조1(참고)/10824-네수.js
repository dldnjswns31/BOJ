const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const first = input[0] + input[1];
const second = input[2] + input[3];

console.log(Number(first) + Number(second));
