const fs = require("fs");
const input = Number(fs.readFileSync("../ex.txt").toString().trim());

let a = "";

for (let i = 0; i < input; i++) {
  a += input - i + "\n";
}
console.log(a);

// 시간초과로인해 console.log를 반복적으로 호출하는 것이 아닌 변수에 문자열을 계속 추가해주는 형식을 취한다.
