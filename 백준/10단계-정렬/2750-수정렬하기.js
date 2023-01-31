const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

// selection sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (Number(arr[minimum]) > Number(arr[j])) minimum = j;
    }
    if (minimum !== i) {
      let temp = arr[i];
      arr[i] = arr[minimum];
      arr[minimum] = temp;
    }
  }
  return arr;
}

console.log(selectionSort(input).join("\n"));
