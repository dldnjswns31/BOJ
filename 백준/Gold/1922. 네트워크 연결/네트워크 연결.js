const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const M = Number(input.shift());
const V = input
  .map((item) => item.split(" ").map(Number))
  .sort((a, b) => a[2] - b[2]);
const unionArr = new Array(M + 1).fill(0).map((_, idx) => idx);

function getParent(parent, num) {
  if (parent[num] === num) {
    return num;
  } else return (parent[parent[num]] = getParent(parent, parent[num]));
}

function unionParent(parent, a, b) {
  let aParent = getParent(parent, a);
  let bParent = getParent(parent, b);
  if (aParent > bParent) parent[aParent] = bParent;
  else parent[bParent] = aParent;
}

let answer = 0;

for (let vertex of V) {
  const [src, dest, weight] = vertex;
  if (getParent(unionArr, src) !== getParent(unionArr, dest)) {
    unionParent(unionArr, src, dest);
    answer += weight;
  }
}
console.log(answer);
