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

const [N, M, K] = input.shift();
const plant = input.shift();
const V = [...input].sort((a, b) => a[2] - b[2]);
const disjoint = new Disjoint(N);
let total = 0;

// 어떻게 발전소와 연결된 그룹인지 알 것인가?
// 어느 한 발전소에만 속해있으면 되므로
// 발전소끼리 유니온으로 미리 연결해둔다.
for (let i = 0; i < plant.length - 1; i++) {
  disjoint.union(plant[i], plant[i + 1]);
}

for (let [src, dest, weight] of V) {
  if (!disjoint.connected(src, dest)) {
    disjoint.union(src, dest);
    total += weight;
  }
}

console.log(total);
