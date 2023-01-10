const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input.shift();

// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

class Stack {
  arr = [];
  push = (num) => {
    this.arr.push(num);
  };
  pop = () => {
    return this.size() === 0 ? -1 : this.arr.pop();
  };
  size = () => {
    return this.arr.length;
  };
  empty = () => {
    return this.size() ? 0 : 1;
  };
  top = () => {
    return this.size() ? this.arr[this.size() - 1] : -1;
  };
}

const stack = new Stack();
const answer = [];

for (let item of input) {
  item = item.split(" ");
  let command = item[0];
  let number = item[1];
  if (command === "push") stack.push(number);
  if (command === "pop") answer.push(stack.pop());
  if (command === "size") answer.push(stack.size());
  if (command === "empty") answer.push(stack.empty());
  if (command === "top") answer.push(stack.top());
}

console.log(answer.join("\n"));
