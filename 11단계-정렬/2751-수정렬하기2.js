const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const num = Number(input.shift());

// 시간 초과 때문에 합병정렬 대신 퀵정렬 사용해야 됨
// 일단 sort 이용한 풀이
console.log(input.sort((a, b) => a - b).join("\n"));
