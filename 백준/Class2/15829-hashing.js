const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const string_length = Number(input.shift());
const test_case = input.shift().split("");
const SPECIAL_NUM = 31;
const MOD = 1234567891;
let sum = 0;

function getPow(index) {
  if (index === 0) return 1;
  if (index === 1) return 31;
  let num = 1;
  return (getPow(index - 1) * SPECIAL_NUM) % MOD;
}

for (let i = 0; i < string_length; i++) {
  let current_string = test_case[i].charCodeAt() - 96;
  sum += current_string * getPow(i);
}

console.log(sum % MOD);
