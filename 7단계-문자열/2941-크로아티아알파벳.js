const fs = require("fs");
let input = fs.readFileSync("../ex.txt").toString().trim();
const cro_alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}
for (let i = 0; i < cro_alphabet.length; i++) {
  input = replaceAll(input, cro_alphabet[i], "a");
}
console.log(input.length);
