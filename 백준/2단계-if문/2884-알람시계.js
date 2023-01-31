const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
  let h = Number(input[0]);
  let m = Number(input[1]);
  if (m >= 45) {
    console.log(`${h} ${m - 45}`);
  } else {
    if (h !== 0) {
      console.log(`${h - 1} ${60 - (45 - m)}`);
    } else {
      console.log(`23 ${60 - (45 - m)}`);
    }
  }
}).on("close", function () {
  process.exit();
});
