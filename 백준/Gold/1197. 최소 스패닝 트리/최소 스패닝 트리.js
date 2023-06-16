const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

class Disjoint {
  constructor(n) {
    this.arr = new Array(n + 1).fill(0).map((item, idx) => idx);
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

const [V, E] = input.shift();
const arr = [...input].sort((a, b) => a[2] - b[2]);
const disjoint = new Disjoint(V);
let weight = 0;

for (let [A, B, C] of arr) {
  if (!disjoint.connected(A, B)) {
    disjoint.union(A, B);
    weight += C;
  }
}

console.log(weight);
