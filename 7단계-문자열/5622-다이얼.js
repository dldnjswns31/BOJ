const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim();
const dial = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
let count = 0;
for (let i = 0; i < input.length; i++) {
  let time = 3;
  for (let j = 0; j < dial.length; j++) {
    for (let k = 0; k < dial[j].length; k++) {
      if (input[i] === dial[j][k]) {
        count += time;
      }
    }
    time++;
  }
}
console.log(count);
