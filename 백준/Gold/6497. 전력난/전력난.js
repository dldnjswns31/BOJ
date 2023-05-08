const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const log = console.log;
const TC = [];
let arr = [];

for (let item of input) {
  if (item === "0 0") {
    TC.push(arr);
    break;
  }
  if (item.split(" ").length === 2) {
    if (arr.length) TC.push(arr);
    arr = [item.split(" ").map(Number)];
    continue;
  }

  arr.push(item.split(" ").map(Number));
}

for (let tc of TC) {
  const [N, M] = tc.shift();
  const V = tc.sort((a, b) => a[2] - b[2]);
  const unionArr = new Array(N + 1).fill(0).map((_, idx) => idx);

  function getParent(parent, num) {
    if (num === parent[num]) return num;
    else return (parent[num] = getParent(parent, parent[num]));
  }

  function unionParent(parent, a, b) {
    a = getParent(parent, a);
    b = getParent(parent, b);

    if (a > b) parent[a] = b;
    else parent[b] = a;
  }

  function checkConnect(parent, a, b) {
    a = getParent(parent, a);
    b = getParent(parent, b);

    return a === b;
  }

  let total = V.reduce((a, c) => a + c[2], 0);
  let sum = 0;

  for (let vertex of V) {
    const [src, dest, weight] = vertex;

    if (checkConnect(unionArr, src, dest)) continue;

    sum += weight;
    unionParent(unionArr, src, dest);
  }

  log(total - sum);
}
