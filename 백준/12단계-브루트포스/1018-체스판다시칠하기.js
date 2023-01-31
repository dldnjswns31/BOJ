const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const MN = input.shift().split(" ");
const N = Number(MN[0]); // row
const M = Number(MN[1]); // column

const blackFirst = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const whiteFirst = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

// 체스판 단위 비교
const blackCheck = (col, row) => {
  let count = 0;

  for (let i = row; i < row + 8; i++) {
    for (let j = col; j < col + 8; j++) {
      //   console.log(i, j, "     ", row, col);
      if (input[i][j] !== blackFirst[i - row][j - col]) {
        count += 1;
      }
    }
  }
  return count;
};

const whiteCheck = (col, row) => {
  let count = 0;

  for (let i = row; i < row + 8; i++) {
    for (let j = col; j < col + 8; j++) {
      if (input[i][j] !== whiteFirst[i - row][j - col]) count += 1;
    }
  }
  return count;
};

const bruteArr = [];

// 입력을 8*8 체스판으로 나눠서 비교 실행
// row
for (let i = 0; i < Number(M) - 7; i++) {
  // column
  for (let j = 0; j < Number(N) - 7; j++) {
    bruteArr.push(blackCheck(i, j));
    bruteArr.push(whiteCheck(i, j));
  }
}
console.log(Math.min(...bruteArr));
