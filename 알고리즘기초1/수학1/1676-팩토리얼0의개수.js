const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();

// 2 * 5 = 10 이므로 2와 5의 개수를 세면 되지만
// 2는 5보다 훨씬 많이 나오므로 5의 갯수만 세면 됨.

function divide5(num) {
  if (num % 5 !== 0) return;
  let count = 0;
  while (num !== 0 && num % 5 === 0) {
    num = num / 5;
    count++;
  }
  return count;
}

let count = 0;
for (let i = 1; i <= Number(input); i++) {
  const num = divide5(i);
  if (num) {
    count += num;
  }
}

console.log(count);

// function factorial(num) {
//   if (num === 1) return 1;

//   return num * factorial(num - 1);
// }

// let num = factorial(input).toString();
// let count = 0;
// for (let i = String(num).length - 1; i >= 0; i--) {
//   let newNum = num;
//   if (newNum.split("").splice(i, 1)[0] === "0") {
//     count++;
//   } else {
//     console.log(count);
//     break;
//   }
// }
