const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const arr = input.shift().split("").map(Number);

const stack = [arr[0]];
let count = K;
let isBreak = false;
for (let i = 1; i < arr.length; i++) {
  while (stack.length) {
    if (stack[stack.length - 1] < arr[i]) {
      stack.pop();
      count--;
      if (count === 0) {
        isBreak = true;
        break;
      }
    } else {
      break;
    }
  }

  if (isBreak) {
    stack.push(...arr.slice(i));
    break;
  }

  stack.push(arr[i]);
}

for (let i = 0; i < count; i++) {
  stack.pop();
}

console.log(stack.join(""));
