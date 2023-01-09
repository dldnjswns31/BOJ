const fs = require("fs");
const input = fs
  .readFileSync("../ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));
const test_num = input.shift();
for (let i = 0; i < test_num; i++) {
  let isPrimeArray = new Array(Number(input[i]) + 1).fill().map((num, i) => {
    return i;
  });
  isPrimeArray[0] = isPrimeArray[1] = false;
  for (let k = 2; k <= Math.sqrt(input[i]); k++) {
    let j = 2;
    while (k * j <= input[i]) {
      isPrimeArray[k * j] = false;
      j++;
    }
  }
  isPrimeArray = isPrimeArray.filter((x) => x != false);

  let x = 0;
  let y = 0;
  let isEnd = true;
  let answer_array = [];
  while (isEnd) {
    if (isPrimeArray[x] + isPrimeArray[y] === input[i]) {
      answer_array.push([isPrimeArray[x], isPrimeArray[y]]);
    }
    if (isPrimeArray[y] === isPrimeArray[isPrimeArray.length - 1]) {
      y = 0;
      x++;
    } else {
      y++;
    }
    if (x === isPrimeArray.length - 1 && y === isPrimeArray.length - 1) {
      isEnd = false;
    }
  }
  if (answer_array.length % 2 == 0) {
    const select = answer_array.length / 2 - 1;
    console.log(answer_array[select][0], answer_array[select][1]);
  } else {
    const select = Math.floor(answer_array.length / 2);
    console.log(answer_array[select][0], answer_array[select][1]);
  }
}
