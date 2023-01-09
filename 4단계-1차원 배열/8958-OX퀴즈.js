const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");
const tcn = input.shift();
const tc = input;

for (let i = 0; i < tc.length; i++) {
  const tci = tc[i].split("");
  let score = 0;
  let o_score = 1;

  for (let j = 0; j < tci.length; j++) {
    if (tci[j] == "O") {
      score = score + o_score;
      o_score++;
    } else {
      o_score = 1;
    }
  }
  console.log(score);
}
