const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
let answer = 1;
for (let i = 1; i <= N; i++) {
  answer = answer * i;
}

console.log(answer);