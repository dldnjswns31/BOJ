const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const G = input.shift();
const P = input.shift();
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
    return this.find(a) === this.find(b);
  }
}

const gate = new Disjoint(G);
let num = 0;

for (let tc of TC) {
    const nextGate = gate.find(tc);
  if (nextGate!==0) {
    num++;
    gate.union(nextGate, nextGate - 1);
  } else {
    break;
  }
}
console.log(num);
