const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const log = console.log;
const N = Number(input.shift());
const M = Number(input.shift());
const plans = input.pop().split(" ").map(Number);
const information = input.map((item) => item.split(" ").map(Number));

// 간선 정보 중복 체크용 2차원 배열
const check = new Array(N).fill(0).map((item) => new Array(N).fill(false));

// 간선 정보 저장
const V = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (information[i][j] && !check[i][j]) {
      V.push([i + 1, j + 1]);
      check[i][j] = true;
      check[j][i] = true;
    }
  }
}

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
for (let vertex of V) {
  const [src, dest] = vertex;
  if (union.connect(src, dest)) continue;

  union.unionParent(src, dest);
}

let prev;
let answer = true;

for (let plan of plans) {
  if (!prev) {
    prev = plan;
    continue;
  }

  if (!union.connect(prev, plan)) {
    answer = false;
    break;
  }
}

answer ? log("YES") : log("NO");
