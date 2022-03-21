const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();

function f(input) {
  if (input == 0) {
    return 0;
  } else if (input == 1) {
    return 1;
  } else {
    return f(input - 1) + f(input - 2);
  }
}
console.log(f(input));
