const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

//

const num = Number(input.shift());
const orderedNum = input.map((item) => Number(item));
let orderIndex = 0;
const stack = [];
const answer = [];

for (let i = 1; i <= num; i++) {
  stack.push(i);
  answer.push("+");
  while (stack.includes(orderedNum[orderIndex])) {
    const popNumIdx = stack.length - stack.indexOf(orderedNum[orderIndex]);
    for (let j = 0; j < popNumIdx; j++) {
      stack.pop();
      answer.push("-");
    }
    orderIndex++;
  }
}
if (orderIndex !== num) console.log("NO");
else console.log(answer.join("\n"));
