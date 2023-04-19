const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();

const arr = input.split("");
const set = new Set();
let answer = 0;

function dfs(str, route) {
  if (str.length === input.length) {
    if (str === input && !set.has(route)) {
      answer++;
      set.add(route);
      return;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) continue;
    const num = arr[i];
    arr[i] = false;
    const left = num + str;
    const right = str + num;

    dfs(left, route + left);
    dfs(right, route + right);
    arr[i] = num;
  }
}

for (let i = 0; i < arr.length; i++) {
  const num = arr[i];
  arr[i] = false;
  dfs(num, num);
  arr[i] = num;
}

console.log(answer);
