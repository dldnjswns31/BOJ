const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();

for (let item of input) {
  const [first, second] = item.split(" ").map(Number);
  first > second ? console.log("Yes") : console.log("No");
}
