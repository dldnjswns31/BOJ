const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const arr = input.shift().split(" ").map(BigInt);
const answer = [];

function dfs(bigint, index) {
  if (index === N) {
    console.log(answer.join(" "));
  }

  if (bigint % BigInt(3) === BigInt(0)) {
    const remain = bigint / BigInt(3);
    if (arr.includes(remain)) {
      answer.push(remain);
      dfs(remain, index + 1);
      answer.pop();
    }
  }
  const multiple = bigint * BigInt(2);
  if (arr.includes(multiple)) {
    answer.push(multiple);
    dfs(multiple, index + 1);
    answer.pop();
  }
}

for (let i = 0; i < N; i++) {
  answer.push(arr[i]);
  dfs(BigInt(arr[i]), 1);
  answer.pop();
}
