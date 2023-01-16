const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const test_num = Number(input.shift());
const test_case = input.shift().split(" ").map(Number);

const num_count = {};

test_case.forEach((item) => {
  if (num_count[item]) {
    num_count[item] += 1;
  } else {
    num_count[item] = 1;
  }
});

const answer = new Array(test_num).fill(-1);
const stack = [];

for (let i = 0; i < test_num; i++) {
  while (
    num_count[test_case[stack[stack.length - 1]]] < num_count[test_case[i]]
  ) {
    answer[stack.pop()] = test_case[i];
  }
  stack.push(i);
}

console.log(answer.join(" "));
