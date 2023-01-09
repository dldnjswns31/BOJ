const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input.shift().split(" ");

const twoDimension = input.map((item) => item.split(" "));

let answer = "";

for (let i = 0; i < num[0]; i++) {
  for (let j = 0; j < num[1]; j++) {
    answer += `${
      Number(twoDimension[i][j]) + Number(twoDimension[i + Number(num[0])][j])
    } `;
  }
  answer += "\n";
}
console.log(answer.trim());
