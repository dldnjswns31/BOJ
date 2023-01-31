const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// 소문자 대문자 숫자 공백 순
// 빈 문자열 예외처리 해줘야됨.

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = lower.toUpperCase();
const number = "0123456789";

for (let item of input) {
  if (item === "") continue;
  const answer = [0, 0, 0, 0];
  for (let str of item) {
    if (lower.includes(str)) {
      answer[0]++;
    } else if (upper.includes(str)) {
      answer[1]++;
    } else if (number.includes(str)) {
      answer[2]++;
    } else if (str === " ") {
      answer[3]++;
    }
  }
  console.log(answer.join(" "));
}
