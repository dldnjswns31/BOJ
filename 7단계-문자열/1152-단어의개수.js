const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const result = input.split(" ");
if (result == "") {
  console.log(0);
} else {
  console.log(result.length);
}
