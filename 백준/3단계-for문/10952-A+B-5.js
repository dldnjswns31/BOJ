const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");

let count = 0;

while (true) {
  const numbers = input[count].split(" ");
  const a = Number(numbers[0]);
  const b = Number(numbers[1]);
  if (a === 0 && b === 0) {
    break;
  }
  console.log(a + b);
  count++;
}
