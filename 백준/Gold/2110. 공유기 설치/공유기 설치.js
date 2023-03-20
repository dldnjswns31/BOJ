const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [houseNum, router] = input.shift().split(" ").map(Number);
const houses = input.map(Number).sort((a, b) => a - b);

let left = 1;
let right = houses[houseNum - 1] - houses[0];
let answer = right;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let prevCoord = houses[0];
  let routerNum = 1;
  for (let i = 1; i < houseNum; i++) {
    let distance = houses[i] - prevCoord;
    if (distance >= mid) {
      routerNum++;
      prevCoord = houses[i];
    }
  }

  if (routerNum >= router) {
    left = mid + 1;
    answer = mid;
  } else {
    right = mid - 1;
  }
}

console.log(answer);
