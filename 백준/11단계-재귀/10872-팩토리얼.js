const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();
function f(n) {
  if (n <= 1) {
    return 1;
  }
  return n * f(n - 1);
}
console.log(f(input));
