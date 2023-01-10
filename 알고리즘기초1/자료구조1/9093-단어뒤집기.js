const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input.shift();

let arr = input.map((item) => item.split(" "));
arr = arr.map((item) =>
  item.map((item2) => item2.split("").reverse().join(""))
);

arr = arr.map((item) => item.join(" "));
console.log(arr.join("\n"));
