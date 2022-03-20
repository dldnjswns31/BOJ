const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  const q = input[i].split(" ");
  const a = Number(q[0]);
  const b = Number(q[1]);
  console.log(`Case #${i}: ${a + b}`);
}
