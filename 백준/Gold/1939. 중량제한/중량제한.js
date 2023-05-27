const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class DisjointSet {
  constructor(N) {
    this.arr = new Array(N + 1).fill(0).map((_, idx) => idx);
  }

  getParent(idx) {
    if (idx === this.arr[idx]) return idx;
    else return (this.arr[idx] = this.getParent(this.arr[idx]));
  }

  unionParent(a, b) {
    a = this.getParent(a);
    b = this.getParent(b);

    if (a > b) this.arr[a] = b;
    else this.arr[b] = a;
  }

  connected(a, b) {
    return this.getParent(a) === this.getParent(b);
  }
}

const [N, M] = input.shift().split(" ").map(Number);
const [start, end] = input.pop().split(" ").map(Number);
const bridges = [...input]
  .map((item) => item.split(" ").map(Number))
  .sort((a, b) => b[2] - a[2]);

const disjointSet = new DisjointSet(N);
let answer = 0;

for (let bridge of bridges) {
  const [src, dest, weight] = bridge;
  disjointSet.unionParent(src, dest);
  answer = weight;

  if (disjointSet.connected(start, end)) break;
}

console.log(answer);
