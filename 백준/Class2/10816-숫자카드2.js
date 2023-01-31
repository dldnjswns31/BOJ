const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const ex_num = input[0];
const ex_case = input[1].split(" ");
const test_num = input[2];
const test_case = input[3].split(" ");

const obj = {};

for (let i = 0; i < ex_num; i++) {
  if (obj[ex_case[i]]) obj[ex_case[i]] += 1;
  else obj[ex_case[i]] = 1;
}

const answer = [];

for (let i = 0; i < test_num; i++) {
  if (obj[test_case[i]]) answer.push(obj[test_case[i]]);
  else answer.push(0);
}

console.log(answer.join(" "));
