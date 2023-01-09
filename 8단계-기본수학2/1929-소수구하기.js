// 에라토스테네스의 체
const fs = require("fs");
const input = fs
  .readFileSync("../ex.txt")
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item));
const [num1, num2] = input;
let isPrimeArray = new Array(num2 + 1).fill(true);
isPrimeArray[0] = isPrimeArray[1] = false;
let num = 1;
for (let i = 2; i <= num2; i++) {
  let x = 2;
  while (i * x <= num2) {
    isPrimeArray[i * x] = false;
    x++;
  }
}
for (let i = num1; i <= num2; i++) {
  if (isPrimeArray[i] == true) {
    console.log(i);
  }
}
// const [num1, num2] = input;
// for (let i = num1; i <= num2; i++) {
//   if (i === 1) {
//     continue;
//   }
//   let error = 0;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       error++;
//     }
//   }
//   if (error === 0) {
//     console.log(i);
//   }
// }
