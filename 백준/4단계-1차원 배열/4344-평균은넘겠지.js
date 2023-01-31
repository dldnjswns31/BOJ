const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");
const tcn = input.shift();

for (let i = 0; i < tcn; i++) {
  const input2 = input[i].split(" ");
  const tcn = Number(input2.shift());
  const tc = input2.map((item) => Number(item));
  let sum = 0;
  for (let j = 0; j < tc.length; j++) {
    sum += tc[j];
  }
  const avr = sum / tcn;
  let count = 0;
  for (let j = 0; j < tc.length; j++) {
    if (tc[j] > avr) {
      count++;
    }
  }
  console.log(((count / tcn) * 100).toFixed(3) + "%");
}
