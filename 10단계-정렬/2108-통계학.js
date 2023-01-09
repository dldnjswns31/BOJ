const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input.shift();
const sortedArr = input.sort((a, b) => a - b);

// 산술평균 : 소수 첫째자리 반올림
const mean = Math.round(
  input.reduce((p, c) => Number(p) + Number(c)) / input.length
);

// 중앙값
const median = sortedArr[Math.floor(sortedArr.length / 2)];

// 최빈값
function getMode(arr) {
  const count = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (count.get(arr[i])) count.set(arr[i], count.get(arr[i]) + 1);
    else count.set(arr[i], 1);
  }
  const maxCount = Math.max(...count.values());
  let modeArr = [];
  count.forEach((v, k) => {
    if (v === maxCount) modeArr.push(k);
  });
  if (modeArr.length === 1) return modeArr[0];
  else return modeArr[1];
}
const mode = getMode(sortedArr);

// 범위
const range = Math.max(...sortedArr) - Math.min(...sortedArr);

console.log([mean, median, mode, range].join("\n"));
