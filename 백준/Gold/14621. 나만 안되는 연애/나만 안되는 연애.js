const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const G = [0, ...input.shift().split(" ")];
const V = input
  .map((item) => item.split(" ").map(Number))
  .sort((a, b) => a[2] - b[2]);

class Union {
  constructor(N) {
    this.arr = new Array(N + 1).fill(0).map((_, idx) => idx);
  }

  getParent(num) {
    if (num === this.arr[num]) return num;
    else return (this.arr[num] = this.getParent(this.arr[num]));
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

const union = new Union(N);
let answer = 0;

for (let vertex of V) {
  const [src, dest, weight] = vertex;

  if (union.connect(src, dest) || G[src] === G[dest]) continue;
  union.unionParent(src, dest);
  answer += weight;
}

let complete = true;
for (let i = 2; i <= N; i++) {
  if (!union.connect(i, i - 1)) complete = false;
}

complete ? console.log(answer) : console.log(-1);
