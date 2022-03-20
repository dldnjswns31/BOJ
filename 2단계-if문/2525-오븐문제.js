const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().split("\n");
const time = input[0].split(" ");
const h = Number(time[0]);
const m = Number(time[1]);
const t = Number(input[1]);

let cooktime = h * 60 + m + t;

if (cooktime < 1440) {
  console.log(`${parseInt(cooktime / 60)} ${cooktime % 60}`);
} else {
  console.log(`${parseInt(cooktime / 60) - 24} ${cooktime % 60}`);
}

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const current = input[0].split(" ").map(Number);
// const currentHour = current[0];
// const currentMinute = current[1];
// const cookTime = Number(input[1]);
// const cookEndTimeHour = parseInt(
//   (currentHour * 60 + currentMinute + cookTime) / 60
// );
// const cookEndTimeMinute = parseInt(
//   (currentHour * 60 + currentMinute + cookTime) % 60
// );
// console.log(
//   cookEndTimeHour >= 24 ? cookEndTimeHour - 24 : cookEndTimeHour,
//   cookEndTimeMinute
// );
