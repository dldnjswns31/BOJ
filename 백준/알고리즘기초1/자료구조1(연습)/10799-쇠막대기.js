const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();

// stack을 이용하여 '('이면 push, ')'이면 pop한다.
// pop할 경우 stack에 남아있는 '('갯수가 조각의 갯수가 된다.
// 이전 브라켓이 '('인 ')'만 레이저이기에 stack에 남아있는 '(' 수만큼 더해주고,  ')'인 경우엔 쇠막대기가 끝나는 지점이므로 +1해준다.

const stack = [];
let prevBracket;
let count = 0;

for (let item of input) {
  if (item === "(") {
    stack.push(1);
    prevBracket = item;
  }
  if (item === ")") {
    stack.pop();
    if (prevBracket === "(") {
      count += stack.length;
    } else {
      count++;
    }
    prevBracket = item;
  }
}

console.log(count);
