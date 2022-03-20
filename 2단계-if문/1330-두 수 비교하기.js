const fs = require("fs");
const { parse } = require("path");

const input = fs.readFileSync("../ex.txt").toString().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else {
  console.log("==");
}
