const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class Heap {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  root() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  left(idx) {
    return idx * 2 + 1;
  }
  right(idx) {
    return (idx + 1) * 2;
  }
}

class MinHeap extends Heap {
  push(val) {
    this.heap.push(val);
    let curIdx = this.size() - 1;
    let parIdx = this.parent(curIdx);

    while (curIdx > 0 && this.heap[curIdx] < this.heap[parIdx]) {
      this.swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = this.parent(curIdx);
    }
  }

  pop() {
    let min = this.heap[0];

    if (this.size() <= 1) this.heap = [];
    else this.heap[0] = this.heap.pop();

    let curIdx = 0;
    let leftIdx = this.left(curIdx);
    let rightIdx = this.right(curIdx);

    if (leftIdx >= this.size()) return min;
    if (rightIdx >= this.size()) {
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
      leftIdx = this.left(curIdx);
      rightIdx = this.right(curIdx);
    }

    return min;
  }
}

class MaxHeap extends Heap {
  push(val) {
    this.heap.push(val);
    let curIdx = this.size() - 1;
    let parIdx = this.parent(curIdx);

    while (curIdx > 0 && this.heap[curIdx] > this.heap[parIdx]) {
      this.swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = this.parent(curIdx);
    }
  }

  pop() {
    let max = this.heap[0];
    if (this.size() <= 1) this.heap = [];
    else this.heap[0] = this.heap.pop();

    let curIdx = 0;
    let leftIdx = this.left(curIdx);
    let rightIdx = this.right(curIdx);

    if (leftIdx >= this.size()) return max;
    if (rightIdx >= this.size()) {
      if (this.heap[leftIdx] > this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return max;
    }

    while (
      this.heap[leftIdx] > this.heap[curIdx] ||
      this.heap[rightIdx] > this.heap[curIdx]
    ) {
      if (this.heap[leftIdx] < this.heap[rightIdx]) {
        this.swap(curIdx, rightIdx);
        curIdx = rightIdx;
      } else {
        this.swap(curIdx, leftIdx);
        curIdx = leftIdx;
      }
      leftIdx = this.left(curIdx);
      rightIdx = this.right(curIdx);
    }
    return max;
  }
}

const N = input.shift();
const arr = [...input];
const answer = [];
const minHeap = new MinHeap();
const maxHeap = new MaxHeap();

// minHeap: 큰수 그룹
// maxHeap: 작은수 그룹

for (let i = 0; i < N; i++) {
  let num = arr[i];
  if (i === 0) {
    maxHeap.push(num);
    answer.push(maxHeap.root());
    continue;
  }

  if (num <= maxHeap.root()) maxHeap.push(num);
  else minHeap.push(num);

  if (minHeap.size() > maxHeap.size()) {
    maxHeap.push(minHeap.pop());
  } else if (maxHeap.size() >= minHeap.size() + 2) {
    minHeap.push(maxHeap.pop());
  }
  answer.push(maxHeap.root());
}

console.log(answer.join("\n"));
