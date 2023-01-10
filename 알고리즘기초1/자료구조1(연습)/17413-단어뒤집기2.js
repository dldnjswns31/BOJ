const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();

function reverseWord(string) {
  let bracket_open = false;
  let stack = [];
  let answer = "";
  for (let item of input) {
    if (item === ">") {
      bracket_open = false;
      stack.push(item);
      answer += stack.join("");
      stack = [];
      continue;
    }

    if (bracket_open) {
      stack.push(item);
      continue;
    }

    if (item === "<") {
      while (stack.length !== 0) {
        answer += stack.pop();
      }
      bracket_open = true;
      stack.push(item);
      continue;
    }

    if (item === " ") {
      while (stack.length !== 0) {
        answer += stack.pop();
      }
      answer += " ";
      continue;
    }

    stack.push(item);
  }
  while (stack.length !== 0) {
    answer += stack.pop();
  }
  return answer;
}

console.log(reverseWord(input));
