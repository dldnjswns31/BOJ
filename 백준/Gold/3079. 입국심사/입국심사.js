const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(BigInt);
let arr = [];

for (let item of input) {
  arr.push(BigInt(item));
}

// 입국심사대 오름차순 정렬
arr = arr.sort((a, b) => a.toString().localeCompare(b.toString()));

// 최대시간은 가장 시간 오래걸리는 심사대에서 모두가 검사 받는 경우
let left = BigInt(1);
let right = BigInt(arr[arr.length - 1] * M);
let answer = 0;

while (left <= right) {
  let mid = (left + right) / BigInt(2);
  let count = BigInt(0);

  for (let item of arr) {
    count += mid / item;
  }

  if (count >= M) {
    right = mid - BigInt(1);
    answer = mid;
  } else {
    left = mid + BigInt(1);
  }
}

console.log(answer.toString().replace("n", ""));
