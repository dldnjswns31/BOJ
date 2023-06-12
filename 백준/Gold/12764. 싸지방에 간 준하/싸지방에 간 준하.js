const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// minHeap에 [시작시간, 끝나는시간, 배열인덱스(자리)] 삽입
// 매 item 마다 taskHeap 루트 노드와 비교
//      - 만약 item의 시작 시간이 루트노드의 끝나는시간 보다 작다면 새로운 자리 생성
//      - 아니라면 루트노드 삭제후 힙에 넣고 정렬. 자리 배열 인덱스 증가
// 끝난것중 가장 빠른 자리에 앉아야하므로, 자리도 우선순위큐 적용해야할듯?

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  push(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) {
      return null;
    }
    const minItem = this.heap[0];
    const lastItem = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = lastItem;
      this.heapifyDown();
    }
    return minItem;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.hasParent(index) &&
      this.parent(index)[1] > this.heap[index][1]
    ) {
      const parentIndex = this.getParentIndex(index);
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index)[1] < this.leftChild(index)[1]
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index][1] < this.heap[smallerChildIndex][1]) {
        break;
      }
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}

const N = Number(input.shift());
const TC = input
  .map((item) => item.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0]);
const taskHeap = new MinHeap();
const comHeap = new MinHeap();
const computer = [];
let computerIdx = 0;

for (let i = 0; i < TC.length; i++) {
  // 시작, 끝나는 시간, 좌석
  const [P, Q] = TC[i];

  if (taskHeap.heap.length === 0) {
    taskHeap.push([P, Q, computerIdx]);
    computerIdx++;
    computer.push(1);
    continue;
  }
  while (taskHeap.peek() && taskHeap.peek()[1] <= P) {
    const [start, end, seatIdx] = taskHeap.pop();
    comHeap.push([0, seatIdx]);
  }

  if (comHeap.peek()) {
    const [_, seatIdx] = comHeap.pop();
    computer[seatIdx] += 1;
    taskHeap.push([P, Q, seatIdx]);
  } else {
    taskHeap.push([P, Q, computerIdx]);
    computerIdx++;
    computer.push(1);
  }
}

console.log(computer.length);
console.log(computer.join(" "));
