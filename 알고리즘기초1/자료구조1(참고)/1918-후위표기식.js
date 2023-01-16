const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

const stack = [];
const answer = [];

for (let item of input) {
  // '(' 이면 스택에 push
  if (item === "(") {
    stack.push(item);
  }
  // ')' 이면 '('이 나올 때 까지 stack.pop() => 괄호 안은 이미 후위표기식으로 stack에 저장되어있음
  // 그리고 '(' 를 stack.pop()
  else if (item === ")") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      answer.push(stack.pop());
    }
    stack.pop();
  }
  // '*' 이나 '/'이면 스택이 비거나 '*', '/'가 나올 때 까지 stack.pop()
  else if (item === "*" || item === "/") {
    while (
      stack.length &&
      (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")
    ) {
      answer.push(stack.pop());
    }
    stack.push(item);
  }
  // '+' 나 '-'면 스택이 비거나 '('가 나올때까지 stack.pop()
  else if (item === "+" || item === "-") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      answer.push(stack.pop());
    }
    stack.push(item);
  }
  // 문자일 경우 answer에 바로 저장
  else {
    answer.push(item);
  }
}

while (stack.length) {
  answer.push(stack.pop());
}

console.log(answer.join(""));
