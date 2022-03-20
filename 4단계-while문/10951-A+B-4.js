const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");

let i = 0;

while (input[i]) {
  const numbers = input[i].split(" ").map(Number);
  const num1 = numbers[0];
  const num2 = numbers[1];
  console.log(num1 + num2);
  i++;
}
