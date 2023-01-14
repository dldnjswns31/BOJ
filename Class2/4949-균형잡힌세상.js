const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .join("")
  .split(".");

for (let string of input) {
  if (string === "") continue;
  const stack = [];
  let isBreak = false;
  for (let j = 0; j < string.length; j++) {
    if (string[j] === "(" || string[j] === "[") {
      stack.push(string[j]);
    }
    if (string[j] === ")") {
      if (j === 0) {
        console.log("no");
        isBreak = true;
        break;
      }

      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        console.log("no");
        isBreak = true;
        break;
      }
    }
    if (string[j] === "]") {
      if (j === 0) {
        console.log("no");
        isBreak = true;
        break;
      }
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        console.log("no");
        isBreak = true;
        break;
      }
    }
  }
  if (isBreak) continue;
  if (stack.length === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
