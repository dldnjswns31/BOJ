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
  const count = {};
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) count[arr[i]] += 1;
    else count[arr[i]] = 1;
  }
  const maxCount = Math.max(...Object.values(count));

  const countKeys = Object.keys(count);
  let modeArr = [];
  for (let i = 0; i < countKeys.length; i++) {
    if (count[countKeys[i]] === maxCount) {
      modeArr.push(countKeys[i]);
    }
  }
  modeArr = modeArr.sort((a, b) => a - b);
  if (modeArr.length === 1) return modeArr[0];
  else return modeArr[1];
}
const mode = getMode(sortedArr);

// 범위
const range = Math.max(...sortedArr) - Math.min(...sortedArr);

console.log([mean, median, mode, range].join("\n"));
