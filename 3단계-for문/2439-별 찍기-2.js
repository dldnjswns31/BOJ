const fs = require("fs");
const input = Number(fs.readFileSync("../ex.txt").toString().trim());

let result = "";

for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= input - i; j++) {
    result += " ";
  }
  for (let k = 1; k <= i; k++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
