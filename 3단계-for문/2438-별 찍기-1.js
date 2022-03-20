const fs = require("fs");
const input = Number(fs.readFileSync("../ex.txt").toString().trim());

let result = "";

for (let i = 1; i <= input; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
