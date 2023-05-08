class Union {
  constructor(num) {
    this.arr = new Array(num + 1).fill(0).map((_, idx) => idx);
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
    a = this.getParent(a);
    b = this.getParent(b);

    return a === b;
  }
}

const log = console.log;
const input = [];

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [N, M] = input.shift().split(" ").map(Number);
  const S = input.map((item) => item.split(" ").map(Number));
  const union = new Union(N);

  for (let set of S) {
    const [oper, a, b] = set;
    if (oper === 0) {
      union.unionParent(a, b);
    } else {
      const connect = union.connect(a, b);
      connect ? log("YES") : log("NO");
    }
  }
  process.exit();
});
