const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const ex = input[1]
  .split(" ")
  .map((item) => Number(item))
  .sort((a, b) => a - b);

const test_case = input[3].split(" ").map((item) => Number(item));

const set = new Set(ex);

const answer = test_case.map((item) => (set.has(item) ? 1 : 0));
console.log(answer.join("\n"));

// function binarySearch(arr, target) {
//   const arrLength = arr.length;

//   let left = 0;
//   let right = arrLength - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (target === arr[mid]) return 1;
//     if (target > mid) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return 0;
// }

// for (let item of test_case) {
//   console.log(binarySearch(ex, item));
// }
