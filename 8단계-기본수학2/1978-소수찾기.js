const fs = require("fs");
let input = fs.readFileSync("../ex.txt").toString().trim().split("\n");
const test_num = input.shift();
input = input[0].split(" ");
let result = 0;
for (let i = 0; i < test_num; i++) {
  const tc = Number(input[i]);
  let error = 0;
  if (tc === 1) {
    continue;
  }
  for (let j = 2; j < tc; j++) {
    if (tc % j == 0) {
      error++;
    }
  }
  if (error == 0) {
    result++;
  }
}
console.log(result);
