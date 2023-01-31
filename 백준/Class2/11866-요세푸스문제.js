const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();

const split = input.split(" ");

let queue = new Array(Number(split[0])).fill(1);
queue = queue.map((item, idx) => item + idx);
const eliminateIdx = Number(split[1]);
const answer = [];

while (queue.length !== 0) {
  for (let i = 1; i < eliminateIdx; i++) {
    queue.push(queue.shift());
  }
  answer.push(queue.shift());
}

console.log(`<${answer.join(", ")}>`);
