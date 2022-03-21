const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");
const num1 = Number(input[0]);
const num2 = Number(input[1]);
let count = 0;
let min = 0;
for (let i = num1; i <= num2; i++) {
  if (i === 1) {
    continue;
  }
  let error = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      error++;
    }
  }
  if (error === 0) {
    if (count === 0) {
      min = i;
    }
    count += i;
  }
}
if (count === 0) {
  console.log(-1);
} else {
  console.log(count);
  console.log(min);
}
