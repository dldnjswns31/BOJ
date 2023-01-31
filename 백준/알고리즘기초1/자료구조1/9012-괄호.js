const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input.shift();

// 스택으로 접근
// '(' 이면 카운트 1 증가, ')'이면 카운트 1 감소.
// 카운트가 음수가 되면 VPS가 될 수 없으므로 즉시 해당 반복문 종료 및 'NO' 반환
// 반복문 종료 시 카운트가 0 이면 'YES' 아니라면 'NO'
const answer = [];

for (let item of input) {
  let count = 0;
  let breakCheck = false;
  for (let item2 of item) {
    if (item2 === "(") count++;
    else {
      count--;
      if (count < 0) {
        answer.push("NO");
        breakCheck = true;
        break;
      }
    }
  }
  if (breakCheck) continue;
  if (count === 0) answer.push("YES");
  else answer.push("NO");
}
console.log(answer.join("\n"));
