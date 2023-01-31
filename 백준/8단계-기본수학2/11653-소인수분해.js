const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim();
let current_num = input;
for (let i = 2; i <= input; i++) {
  let isStop = true;
  while (isStop) {
    if (current_num % i == 0) {
      console.log(i);
      current_num = parseInt(current_num / i);
    } else {
      isStop = false;
    }
  }
}
