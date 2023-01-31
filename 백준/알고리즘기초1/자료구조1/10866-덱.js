const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const test_num = input.shift();

class Deque {
  arr = [];
  push_front = (num) => {
    this.arr.unshift(num);
    return null;
  };
  push_back = (num) => {
    this.arr.push(num);
    return null;
  };
  pop_front = () => {
    if (this.empty()) return -1;
    return this.arr.shift();
  };
  pop_back = () => {
    if (this.empty()) return -1;
    return this.arr.pop();
  };
  size = () => {
    return this.arr.length;
  };
  empty = () => {
    if (this.size() === 0) return 1;
    return 0;
  };
  front = () => {
    if (this.empty()) return -1;
    return this.arr[0];
  };
  back = () => {
    if (this.empty()) return -1;
    return this.arr[this.size() - 1];
  };
}

const deque = new Deque();
const answer = [];

for (let i = 0; i < test_num; i++) {
  const arr = input[i].split(" ");
  const command = arr[0];
  const num = Number(arr[1]);

  answer.push(deque[command](num));
}

console.log(
  answer
    .reduce((p, c) => {
      if (c === null) return p;
      return `${p}\n${c}`;
    }, "")
    .trim()
);
