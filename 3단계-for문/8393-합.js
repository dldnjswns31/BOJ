const fs = require("fs");
const input = Number(fs.readFileSync("../ex.txt").toString().trim());
let count = 0;

for (let i = 0; i < input; i++) {
  count = count + i + 1;
}
console.log(count);
