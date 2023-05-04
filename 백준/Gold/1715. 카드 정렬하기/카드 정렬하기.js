const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let cards = [...input.map(Number)];

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  size() {
    return this.heap.length;
  }

  push(val) {
    this.heap.push(val);
    let curIdx = this.size() - 1;
    let parIdx = Math.floor((curIdx - 1) / 2);
    while (curIdx > 0 && this.heap[curIdx] < this.heap[parIdx]) {
      this.swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = Math.floor((curIdx - 1) / 2);
    }
  }

  pop() {
    const min = this.heap[0];

    if (this.size() <= 1) this.heap = [];
    else this.heap[0] = this.heap.pop();

    let curIdx = 0;
    let leftIdx = curIdx * 2 + 1;
    let rightIdx = (curIdx + 1) * 2;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while (
      this.heap[leftIdx] < this.heap[curIdx] ||
      this.heap[rightIdx] < this.heap[curIdx]
    ) {
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2 + 1;
      rightIdx = (curIdx + 1) * 2;
    }

    return min;
  }
}

const minHeap = new MinHeap();
let answer = 0;

for (let i = 0; i < N; i++) {
  minHeap.push(cards[i]);
}

while (minHeap.size() > 1) {
  let num1 = minHeap.pop();
  let num2 = minHeap.pop();
  answer += num1 + num2;
  minHeap.push(num1 + num2);
}

console.log(answer);
