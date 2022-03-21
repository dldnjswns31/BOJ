const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();
input.forEach((item) => {
  const tc = item.split(" ").sort(function (a, b) {
    return a - b;
  });
  if (tc[0] * tc[0] + tc[1] * tc[1] === tc[2] * tc[2]) {
    console.log("right");
  } else {
    console.log("wrong");
  }
});
