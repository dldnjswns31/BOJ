const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const num = input.shift();

// 11650-좌표정렬과는 반대로 y축 정렬 후 중복 발생하면 x축 정렬이다.
// 그러므로 x축을 먼저 정렬한 뒤 y축을 정렬해준다.
console.log(
  input
    .sort((a, b) => {
      const aSplit = a.split(" ");
      const bSplit = b.split(" ");
      return aSplit[0] - bSplit[0];
    })
    .sort((a, b) => {
      const aSplit = a.split(" ");
      const bSplit = b.split(" ");
      return aSplit[1] - bSplit[1];
    })
    .join("\n")
);
