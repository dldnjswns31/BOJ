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

let testNum = 1;

while (input.length > 1) {
  const [n, m] = input.shift();
  const TC = input.splice(0, m);
  const disjoint = new Disjoint(n);
  const tree = new Set();
  const cycle = new Set();
  const finalCycle = new Set();

  for (let [a, b] of TC) {
    if (disjoint.connected(a, b)) {
      disjoint.union(a, b);
      cycle.add(disjoint.find(a));
    } else {
      disjoint.union(a, b);
    }
  }

  for (let i = 1; i <= n; i++) {
    tree.add(disjoint.find(i));
  }

  for (let item of cycle) {
    finalCycle.add(disjoint.find(item));
  }

  const num = tree.size - finalCycle.size;

  if (num >= 3) {
    console.log(`Case ${testNum}: A forest of ${num} trees.`);
  } else if (num === 1) {
    console.log(`Case ${testNum}: There is one tree.`);
  } else {
    console.log(`Case ${testNum}: No trees.`);
  }

  testNum++;
}
