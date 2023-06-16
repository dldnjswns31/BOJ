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

const N = input.shift()[0];
const TC = [0, ...input];
let queue = [];

for (let i = 1; i < TC.length; i++) {
  const star1 = TC[i];
  for (let j = i + 1; j < TC.length; j++) {
    const star2 = TC[j];
    const distance = Number(
      Math.sqrt(
        Math.pow(star1[0] - star2[0], 2) + Math.pow(star1[1] - star2[1], 2)
      ).toFixed(2)
    );
    queue.push([i, j, distance]);
  }
}

queue = queue.sort((a, b) => a[2] - b[2]);
const disjoint = new Disjoint(N);
let sum = 0;

for (let [src, dest, weight] of queue) {
  if (!disjoint.connected(src, dest)) {
    disjoint.union(src, dest);
    sum += weight;
  }
}

console.log(sum);
