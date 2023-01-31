const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();

let suffix = [];

for (let i = 0; i < input.length; i++) {
  suffix.push(input.slice(i));
}

console.log(suffix.sort((a, b) => a.localeCompare(b)).join("\n"));
