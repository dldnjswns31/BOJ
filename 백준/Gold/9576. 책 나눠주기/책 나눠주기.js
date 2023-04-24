const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const TC = Number(input.shift());

for (let t = 0; t < TC; t++) {
  const [N, M] = input.shift().split(" ").map(Number);
  // 나눠준 책 체크 배열
  const books = [true, ...new Array(N).fill(false)];
  // 학생별 원하는 책 배열
  let student = [0];

  for (let i = 0; i < M; i++) {
    const wanted = input.shift().split(" ").map(Number);
    student.push(wanted);
  }

  student = student.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  let count = 0;

  for (let i = 1; i < student.length; i++) {
    const [start, end] = student[i];

    for (let j = start; j <= end; j++) {
      if (!books[j]) {
        books[j] = i;
        count++;
        break;
      }
    }
  }
  console.log(count);
}
