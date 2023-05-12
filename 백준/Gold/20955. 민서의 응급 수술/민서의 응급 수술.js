const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Union {
  constructor(N) {
    this.arr = new Array(N + 1).fill(0).map((_, idx) => idx);
  }

  getParent(node) {
    if (node === this.arr[node]) return node;
    else return (this.arr[node] = this.getParent(this.arr[node]));
  }

  unionParent(a, b) {
    a = this.getParent(a);
    b = this.getParent(b);

    if (a > b) this.arr[a] = b;
    else this.arr[b] = a;
  }

  connect(a, b) {
    return this.getParent(a) === this.getParent(b);
  }
}

const [S, T] = input.shift().split(" ").map(Number);
const arr = input.map((item) => item.split(" ").map(Number));
const union = new Union(S);
let cut = 0;
let link = 0;

for (let item of arr) {
  const [a, b] = item;
  if (union.connect(a, b)) {
    cut++;
  }

  union.unionParent(a, b);
}

for (let i = 1; i < S; i++) {
  if (!union.connect(i, i + 1)) {
    link++;
    union.unionParent(i, i + 1);
  }
}

console.log(cut + link);
