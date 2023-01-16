const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const test_num = input.shift();
const ex = input.shift();
const nums = input.map(Number);
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const alphabet_num = {};
for (let i = 0; i < test_num; i++) {
  alphabet_num[alphabet[i]] = nums[i];
}

const str = [];
const operator_ex = "+-*/";

for (let item of ex) {
  // 알파벳일 경우
  if (!operator_ex.includes(item)) {
    str.push(alphabet_num[item]);
  }
  // 연산자일 경우
  else {
    const right = str.pop();
    const left = str.pop();
    str.push(eval(`${left}${item}${right}`));
  }
}

console.log(Number(str.join("")).toFixed(2));
