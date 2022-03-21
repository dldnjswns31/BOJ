const { count } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let [dot1, dot2, dot3] = input;
dot1 = dot1.split(" ");
dot2 = dot2.split(" ");
dot3 = dot3.split(" ");
let x_array = [dot1[0], dot2[0], dot3[0]]; // 30 10 10
let y_array = [dot1[1], dot2[1], dot3[1]]; // 20 10 20
let [x, y] = [dot1[0], dot1[1]];
x_array = x_array.filter((item) => item != x);
y_array = y_array.filter((item) => item != y);
let result = [];
if (x_array.length === 2) {
  result.push(x);
} else {
  result.push(x_array[0]);
}
if (y_array.length === 2) {
  result.push(y);
} else {
  result.push(y_array[0]);
}
console.log(result.join(" "));
