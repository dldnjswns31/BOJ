const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// splice()를 쓰면 시간초과가 나온다.
// 커서를 기준으로 좌우 문자열을 stack으로 취급하자.
// a b c 커서 d e 라고 한다면
// [a, b, c] , [e d] 인 셈
// 오른쪽 문자열은 스택의 push와 pop을 사용하기 위해(시간복잡도 때문에) 역순으로 들어간다.

const test_string = input.shift().split("");
const test_num = input.shift();

const left_str = [...test_string];
const right_str = [];

for (let i = 0; i < test_num; i++) {
  const arr = input[i].split(" ");
  const command = arr[0];
  const string = arr[1];
  if (command === "L") {
    if (left_str.length === 0) continue;
    right_str.push(left_str.pop());
  }
  if (command === "D") {
    if (right_str.length === 0) continue;
    left_str.push(right_str.pop());
  }
  if (command === "B") {
    if (left_str.length === 0) continue;
    left_str.pop();
  }
  if (command === "P") {
    left_str.push(string);
  }
}

console.log([...left_str, ...right_str.reverse()].join(""));
