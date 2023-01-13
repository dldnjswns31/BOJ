const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();

for (let item of input) {
  const split = item.split("");
  const reverseSplit = item.split("").reverse();

  JSON.stringify(split) === JSON.stringify(reverseSplit)
    ? console.log("yes")
    : console.log("no");
}
