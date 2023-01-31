const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");

for (let i = 0; i < Number(input[0]); i++) {
  const x = input[i + 1].split(" ");
  const a = Number(x[0]);
  const b = Number(x[1]);
  console.log(a + b);
}
