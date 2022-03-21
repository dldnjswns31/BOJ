const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());
let str = "";

// 3*3으로 최대한 쪼개서 위치를 파악후 *을 넣는다. <- 기본 골자

function star(i, j) {
  if (i % 3 === 1 && j % 3 === 1) str += " ";
  else {
    if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) str += "*";
    else star(Math.floor(i / 3), Math.floor(j / 3));
  }
}

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    star(i, j);
  }
  if (i !== input - 1) {
    str += "\n";
  }
}
console.log(str);
