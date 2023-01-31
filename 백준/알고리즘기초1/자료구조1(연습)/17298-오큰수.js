const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const test_num = Number(input.shift());
const test_case = input.shift().split(" ").map(Number);

const answer = new Array(test_num).fill(-1);
// 스택엔 index 저장
const stack = [];

for (let i = 0; i < test_num; i++) {
  // 스택의 마지막 인덱스 아이템보다 현재 값이 크다면 스택에서 pop한 index의 값을 현재 값(오큰수)로 수정
  // 현재 값이 작을때까지 반복
  while (test_case[stack[stack.length - 1]] < test_case[i]) {
    answer[stack.pop()] = test_case[i];
  }
  // 아닌경우 스택에 인덱스 저장
  stack.push(i);
}

console.log(answer.join(" "));
