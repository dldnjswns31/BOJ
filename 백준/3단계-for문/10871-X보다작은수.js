const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");

const input1 = input[0].split(" ");
const input2 = input[1].split(" ").map(Number);

const standard = Number(input1[1]);

let result = "";

for (let i = 0; i < input2.length; i++) {
  if (input2[i] < standard) {
    result += input2[i] + " ";
  }
}

console.log(result);
