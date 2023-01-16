const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const test_num = input.shift();
const answer = [];

function gcd(num1, num2) {
  if (num2 === 0) return num1;
  else return gcd(num2, num1 % num2);
}

for (let i = 0; i < test_num; i++) {
  const arr = input[i].split(" ");
  const [num1, num2] = arr;
  const lcm = (num1 * num2) / gcd(num1, num2);
  answer.push(lcm);
}

console.log(answer.join("\n"));
