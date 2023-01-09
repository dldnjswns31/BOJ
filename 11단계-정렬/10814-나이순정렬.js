const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input.shift();

console.log(
  input
    .sort((a, b) => {
      const aSplit = a.split(" ");
      const bSplit = b.split(" ");
      return aSplit[0] - bSplit[0];
    })
    .join("\n")
);
