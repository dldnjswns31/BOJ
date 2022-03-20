const fs = require("fs");
const input = fs
  .readFileSync("../ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));
let multiple = input[0] * input[1] * input[2];
multiple = multiple
  .toString()
  .split("")
  .map((item) => Number(item));

for (let i = 0; i < 10; i++) {
  let count = 0;
  for (let j = 0; j < multiple.length; j++) {
    if (multiple[j] === i) {
      count++;
    }
  }
  console.log(count);
}
