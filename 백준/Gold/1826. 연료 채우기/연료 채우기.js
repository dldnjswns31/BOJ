const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let [L, P] = input.pop().split(" ").map(Number);

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // 부모 노드의 인덱스를 반환하는 메서드
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // 왼쪽 자식 노드의 인덱스를 반환하는 메서드
  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  // 오른쪽 자식 노드의 인덱스를 반환하는 메서드
  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  // 두 노드의 값을 교환하는 메서드
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // 새로운 요소를 힙에 추가하는 메서드
  insert(value) {
    this.heap.push(value); // 힙의 맨 끝에 요소를 추가
    this.heapifyUp(); // 요소를 올바른 위치로 이동시킴
  }

  // 요소를 올바른 위치로 이동시키는 메서드
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] >= this.heap[index]) {
        break; // 부모 노드가 더 크면 종료
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  // 최대값을 제거하고 반환하는 메서드
  extractMax() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const max = this.heap[0];
    this.heap[0] = this.heap.pop(); // 힙의 마지막 요소를 루트로 이동
    this.heapifyDown(); // 요소를 올바른 위치로 이동시킴
    return max;
  }

  // 요소를 올바른 위치로 이동시키는 메서드
  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let maxIndex = index;
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] > this.heap[maxIndex]
      ) {
        maxIndex = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] > this.heap[maxIndex]
      ) {
        maxIndex = rightChildIndex;
      }

      if (index === maxIndex) {
        break; // 자식 노드보다 더 큰 값이 없으면 종료
      }

      this.swap(index, maxIndex);
      index = maxIndex;
    }
  }
}

const solution = () => {
  const maxHeap = new MaxHeap();
  let currentOil = P;
  let time = 0;
  let stations = [...input].map((item) => item.split(" ").map(Number));
  stations.push([L, 0]);
  stations = stations.sort((a, b) => a[0] - b[0]);

  for (let [stationPos, oil] of stations) {
    if (currentOil < stationPos) {
      while (currentOil < stationPos) {
        const maxOil = maxHeap.extractMax();

        if (!maxOil) return -1;

        currentOil += maxOil;
        time++;
      }
    }
    maxHeap.insert(oil);
  }

  return time;
};

console.log(solution());
