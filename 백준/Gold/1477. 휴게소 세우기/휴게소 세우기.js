const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [currentRest, buildRest, length] = input.shift().split(" ").map(Number);

if (currentRest === 0) return console.log(Math.ceil(length / (buildRest + 1)));

const restArr = [
  0,
  ...input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b),
  length,
];

let left = 1;
let right = length - 1;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let count = 0;

  for (let i = 1; i < restArr.length; i++) {
    let distance = restArr[i] - restArr[i - 1];
    if (distance > mid) {
      count += Math.floor((distance - 1) / mid);
    }
  }

  if (count <= buildRest) right = mid - 1;
  else left = mid + 1;
}

return console.log(left);
