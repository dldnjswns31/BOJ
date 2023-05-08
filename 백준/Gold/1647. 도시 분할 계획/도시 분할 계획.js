const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 최소신장트리 구축 후 가장 비용이 큰 간선 하나를 제거

const log = console.log;
const [N, M] = input.shift().split(" ").map(Number);
const V = input
  .map((item) => item.split(" ").map(Number))
  .sort((a, b) => a[2] - b[2]);
const unionArr = new Array(N + 1).fill(0).map((_, idx) => idx);

function getParent(parent, num) {
  if (parent[num] === num) return num;
  else return (parent[num] = getParent(parent, parent[num]));
}

function unionParent(parent, a, b) {
  a = getParent(parent, a);
  b = getParent(parent, b);

  if (a > b) parent[a] = b;
  else parent[b] = a;
}

function checkConnect(parent, a, b) {
  return getParent(parent, a) === getParent(parent, b);
}

let answer = 0;
let maxWeight = 0;

for (let vertex of V) {
  const [src, dest, weight] = vertex;
  if (checkConnect(unionArr, src, dest)) {
    continue;
  }
  answer += weight;
  maxWeight = Math.max(maxWeight, weight);
  unionParent(unionArr, src, dest);
}

console.log(answer - maxWeight);
