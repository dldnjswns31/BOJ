const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

const [N, M, K] = input.shift();
const cost = [0, ...input.shift()];
const TC = [...input];

class Disjoint {
  constructor(n) {
    this.arr = new Array(n + 1).fill(0).map((_, idx) => idx);
  }

  find(idx) {
    if (this.arr[idx] === idx) return idx;
    else return (this.arr[idx] = this.find(this.arr[idx]));
  }

  union(a, b) {
    a = this.find(a);
    b = this.find(b);
    if (a > b) this.arr[a] = b;
    else this.arr[b] = a;
  }

  connected(a, b) {
    return this.arr[a] === this.arr[b];
  }
}

const disjoint = new Disjoint(N);

for (let [a, b] of TC) {
  disjoint.union(a, b);
}

const costObj = {};

// 돈 측정 잘못됨.
for (let i = 1; i <= N; i++) {
  const parent = disjoint.find(i);
  if (costObj[parent]) {
    costObj[parent] = Math.min(costObj[parent], cost[i]);
  } else {
    costObj[parent] = cost[parent];
  }
}

let money = 0;
for (let v of Object.values(costObj)) {
  money += v;
}

money <= K ? console.log(money) : console.log("Oh no");
