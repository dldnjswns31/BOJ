const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const input1 = input.shift();
const [card_num, blackJack] = input1.split(" ").map((item) => Number(item));
const cards = input[0].split(" ").map((item) => Number(item));

let [sum, max] = [0, 0];

for (let i = 0; i < card_num - 2; i++) {
  for (let j = 1; j < card_num - 1; j++) {
    for (let k = 2; k < card_num; k++) {
      if (i == j || j == k || i == k) {
        continue;
      }
      sum = cards[i] + cards[j] + cards[k];
      if (sum <= blackJack && sum > max) {
        max = sum;
      }
    }
  }
}
console.log(max);
