const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const twoDimension = input.map((item) => item.split(" "));

let max = 0;
let coord = { column: 1, row: 1 };
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (twoDimension[i][j] >= max) {
      max = twoDimension[i][j];
      coord.column = i + 1;
      coord.row = j + 1;
    }
  }
}

console.log(max);
console.log(`${coord.column} ${coord.row}`);
