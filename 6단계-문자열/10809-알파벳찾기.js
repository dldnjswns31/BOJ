const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("");
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let result = "";
for (let i = 0; i < alphabet.length; i++) {
  result += input.indexOf(alphabet[i]) + " ";
}
console.log(result);
