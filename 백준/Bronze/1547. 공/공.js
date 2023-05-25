const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let ball = 1;

for (let item of input) {
  const switching = item.split(" ").map(Number);

  if (switching.includes(ball)) {
    for (let s of switching) {
      if (s !== ball) {
        ball = s;
        break;
      }
    }
  }
}

console.log(ball);
