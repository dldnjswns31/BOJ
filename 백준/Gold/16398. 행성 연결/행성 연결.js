const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

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
    return this.find(a) === this.find(b);
  }
}

const N = Number(input.shift());
const TC = [...input].map((item) => item.split(" ").map(Number));
const disjoint = new Disjoint(N);
let queue = [];
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    queue.push([i + 1, j + 1, TC[i][j]]);
  }
}

queue = queue.sort((a, b) => a[2] - b[2]);
let total = 0;

for (let [src, dest, weight] of queue) {
  if (!disjoint.connected(src, dest)) {
    disjoint.union(src, dest);
    total += weight;
  }
}

console.log(total);
