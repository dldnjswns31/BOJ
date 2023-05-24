const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Result = (one, two, three) => {
  let twoOne = two - one - 1;
  let threeTwo = three - two - 1;

  twoOne > threeTwo ? console.log(twoOne) : console.log(threeTwo);
};

let array = [];
rl.on("line", (userInput) => {
  array = userInput.split(" ");
  const one = parseInt(array[0]);
  const two = parseInt(array[1]);
  const three = parseInt(array[2]);

  Result(one, two, three);
}).on("close", () => {
  process.exit();
});