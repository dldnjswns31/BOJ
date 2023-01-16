const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const answer = new Array(26).fill(0);

for (let str of input) {
  answer[ALPHABET.indexOf(str)]++;
}

console.log(answer.join(" "));
