const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Union {
  constructor() {
    // 유니온 파인드용 해시
    this.hash = {};
    // 각 집합의 원소 갯수 저장
    this.num = {};
  }

  getParent(name) {
    if (this.hash[name]) {
      if (this.hash[name] === name) return name;
      else {
        return (this.hash[name] = this.getParent(this.hash[name]));
      }
    } else {
      this.hash[name] = name;
      this.num[name] = 1;
      return name;
    }
  }

  unionParent(a, b) {
    a = this.getParent(a);
    b = this.getParent(b);

    if (a.length > b.length) {
      this.hash[a] = b;
      this.num[b] += this.num[a];
    } else {
      this.hash[b] = a;
      this.num[a] += this.num[b];
    }
  }

  connect(a, b) {
    return this.getParent(a) === this.getParent(b);
  }
}
const TC = Number(input.shift());
let answer = [];
for (let tc = 0; tc < TC; tc++) {
  const union = new Union();
  const N = Number(input.shift());
  const arr = input.splice(0, N).map((item) => item.split(" "));

  for (item of arr) {
    const [A, B] = item;
    const AParent = union.getParent(A);
    const BParent = union.getParent(B);
    if (AParent !== BParent) union.unionParent(A, B);
    answer.push(union.num[union.getParent(A)]);
  }
}

console.log(answer.join("\n"));
