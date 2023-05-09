const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const log = console.log;
const [N, M] = input.shift().split(" ").map(Number);
const [T, ...truth] = input.shift().split(" ").map(Number);

class Union {
  constructor(num) {
    this.arr = new Array(num + 1).fill(0).map((_, idx) => idx);
  }

  getParent(num) {
    if (this.arr[num] === num) return num;
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

for (let i = 1; i < T; i++) {
  union.unionParent(truth[i - 1], truth[i]);
}

let truthGroup = Math.min(...truth);
let answer = 0;
const participantsArr = [...input]
  .map((item) => item.split(" ").map(Number))
  .sort((a, b) => b[0] - a[0]);

for (let item of participantsArr) {
  const [P, ...participants] = item;
  if (participants.length < 2) continue;
  for (let i = 1; i < P; i++) {
    union.unionParent(participants[i - 1], participants[i]);
  }
}

for (let item of participantsArr) {
  const [P, ...participants] = item;
  let isBreak = false;
  for (let participant of participants) {
    if (union.connect(truthGroup, participant)) {
      isBreak = true;
      break;
    }
  }
  if (!isBreak) answer++;
}

log(answer);
