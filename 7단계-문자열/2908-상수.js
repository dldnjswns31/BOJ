const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split(" ");
let [num1, num2] = input;
num1 = num1.split("").reverse().join("");
num2 = num2.split("").reverse().join("");
if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}
