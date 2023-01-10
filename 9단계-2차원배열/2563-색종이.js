const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input.shift();
let arr = input.map((item) => item.split(" "));

// 가로 100, 세로 100인 2차원 배열
const paper = new Array(100).fill().map((el) => new Array(100).fill(false));
// const paper = new Array(100).fill(new Array(100).fill(false)) -> 생성되는 2차원 배열이 모두 같은 주소값을 가르켜서 하나를 바꾸면 모두 똑같이 바뀌는 문제 있음

// paper[세로][가로]
arr.forEach((item) => {
  const width = Number(item[0]);
  const height = Number(item[1]);

  for (let h = height; h < height + 10; h++) {
    for (let w = width; w < width + 10; w++) {
      paper[h][w] = true;
    }
  }
});

let count = 0;

paper.forEach((item) => {
  item.forEach((item2) => {
    if (item2 === true) count++;
  });
});

console.log(count);
