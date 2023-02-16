const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const test_num = input.shift();
let arr = [];
for (let i = 0; i < test_num; i++) {
  let count = 0;
  let select_num = input[i].split(" ").map((item) => Number(item));
  for (let j = 0; j < test_num; j++) {
    if (i !== j) {
      let compare_num = input[j].split(" ").map((item) => Number(item));
      if (select_num[0] < compare_num[0] && select_num[1] < compare_num[1]) {
        count++;
      }
    }
  }
  arr.push(count + 1);
}
console.log(arr.join(" "));
