const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");
const test_num = input.shift();
let result = 0;
for (let i = 0; i < input.length; i++) {
  // 중복 알파벳을 체크 할 배열
  let alphabet_array = [];
  // test case = tc
  const tc = input[i];
  let error = 0;
  // 현재 알파벳과 비교할 전 알파벳. 첫 알파벳은 주어진 문자열의 첫번째 문자로 초기화해준다.
  let compare_alphabet = tc[0];
  for (let j = 0; j < tc.length; j++) {
    if (tc[j] === compare_alphabet) {
      if (alphabet_array.indexOf(tc[j]) === -1) {
        alphabet_array.push(tc[j]);
      }
    } else {
      if (alphabet_array.indexOf(tc[j]) === -1) {
        alphabet_array.push(tc[j]);
        compare_alphabet = tc[j];
      } else {
        error++;
      }
    }
  }
  if (error == 0) {
    result++;
  }
}
console.log(result);
