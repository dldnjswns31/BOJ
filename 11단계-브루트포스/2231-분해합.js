const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());
let arr = [];
for (let i = 0; i < input; i++) {
  const try_num = input - i;
  const try_num_arr = String(try_num).split("");
  let num = try_num;
  for (let j = 0; j < try_num_arr.length; j++) {
    num += Number(try_num_arr[j]);
  }
  if (num === input) {
    arr.push(try_num);
  }
}
if (arr.length === 0) {
  console.log(0);
} else {
  let min = Math.min(...arr);
  console.log(min);
}
