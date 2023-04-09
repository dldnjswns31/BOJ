const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
const answer = [];

for (let i = 0; i < input.length; i++) {
  const N = +input[i];
  const num = input.slice(i + 1, i + 1 + N).sort();
  let isBreak = false;

  for (let j = 1; j < num.length; j++) {
    const prev = num[j - 1];
    const cur = num[j];

    if (cur.startsWith(prev)) {
      isBreak = true;
      break;
    }
  }

  isBreak ? answer.push("NO") : answer.push("YES");
  i += N;
}

console.log(answer.join("\n"));
