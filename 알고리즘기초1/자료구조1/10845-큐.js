const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const test_num = input.shift();
class Queue {
  arr = [];
  push = (num) => {
    this.arr.push(num);
    return null;
  };
  pop = () => {
    if (this.empty()) return -1;
    return this.arr.shift();
  };
  size = () => {
    return this.arr.length;
  };
  empty = () => {
    if (this.size()) return 0;
    return 1;
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

const queue = new Queue();
const answer = [];

for (let i = 0; i < test_num; i++) {
  const arr = input[i].split(" ");
  const command = arr[0];
  const num = Number(arr[1]);

  answer.push(queue[command](num));
}

console.log(
  answer
    .reduce((p, c) => {
      if (c === null) return p;
      return `${p}\n${c}`;
    }, "")
    .trim()
);
