const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 자기보다 작은 값의 갯수 === 중복 제거 및 정렬한 뒤 자기보다 앞에 있는 값의 갯수(index)
const num = input.shift();
const arr = input[0].split(" ");
const set = new Set(arr);
const removeDuplicate = [...set].sort((a, b) => Number(a) - Number(b));

const dict = {};
removeDuplicate.forEach((item, index) => {
  dict[item] = index;
});

let answer = "";

for (let i = 0; i < arr.length; i++) {
  answer += `${dict[arr[i]]} `;
}

console.log(answer.trim());
