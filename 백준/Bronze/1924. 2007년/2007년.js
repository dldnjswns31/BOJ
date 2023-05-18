const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim();

const [N, M] = input.split(" ").map(Number);
const month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let total = M;

for (let i = 1; i < N; i++) {
  total += month[i];
}
total = total % 7;

console.log(day[total]);
