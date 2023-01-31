const fs = require("fs");
const input = fs
  .readFileSync("../ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));
const test_num = input.pop();
const max = Math.max(...input);
let isPrimeArray = new Array(max * 2 + 1).fill(true);
isPrimeArray[0] = isPrimeArray[1] = false;
for (let i = 2; i <= max * 2; i++) {
  let count = 2;
  while (i * count <= max * 2 + 1) {
    isPrimeArray[i * count] = false;
    count++;
  }
}

for (let i = 0; i < input.length; i++) {
  let j = input[i] + 1;
  let count = 0;
  while (j <= input[i] * 2) {
    if (isPrimeArray[j] === true) {
      count++;
    }
    j++;
  }
  console.log(count);
}
