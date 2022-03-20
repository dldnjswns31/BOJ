const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");
const tcn = Number(input.shift());
for (let i = 0; i < tcn; i++) {
  const a = input[i].split(" ");
  const num = Number(a[0]);
  const str = a[1].split("");
  let result = "";
  for (let j = 0; j < str.length; j++) {
    result += str[j].repeat(num);
  }
  console.log(result);
}
