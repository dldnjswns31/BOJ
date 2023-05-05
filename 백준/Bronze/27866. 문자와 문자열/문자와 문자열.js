const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const str = input.shift().split('');
const N = Number(input.shift());

console.log(str[N-1])