const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let arr = [];
input.forEach((item, index) => {
  const [x, r] = item.split(" ").map(Number);
  arr.push([x - r, index]);
  arr.push([x + r, index]);
});

arr = arr.sort((a, b) => a[0] - b[0]);
const stack = [arr[0]];

for (let i = 1; i < arr.length; i++) {
  if (stack.length) {
    if (stack[stack.length - 1][1] === arr[i][1]) stack.pop();
    else stack.push(arr[i]);
  } else {
    stack.push(arr[i]);
  }
}

stack.length ? console.log("NO") : console.log("YES");
