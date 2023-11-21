class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  empty() {
    if (this.size() === 0) return true;
    else return false;
  }
  
  top() {
      return this.heap[1];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

    pop() {
      const min = this.heap[1];
      if (this.heap.length <= 2) this.heap = [null];
      else this.heap[1] = this.heap.pop();

      let curIdx = 1;
      let leftIdx = curIdx * 2;
      let rightIdx = curIdx * 2 + 1;

      while (this.heap[leftIdx] !== undefined || this.heap[rightIdx] !== undefined) {
        const leftChild = this.heap[leftIdx] !== undefined ? this.heap[leftIdx] : Infinity;
        const rightChild = this.heap[rightIdx] !== undefined ? this.heap[rightIdx] : Infinity;

        if (leftChild < this.heap[curIdx] || rightChild < this.heap[curIdx]) {
          const minIdx = leftChild < rightChild ? leftIdx : rightIdx;
          this.swap(minIdx, curIdx);
          curIdx = minIdx;
          leftIdx = curIdx * 2;
          rightIdx = curIdx * 2 + 1;
        } else {
          break;
        }
      }

      return min;
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap();
    let num = 0;
    
    scoville.forEach(item => minHeap.push(item));


    while(minHeap.top() < K && minHeap.size() > 1) {
        const min1 = minHeap.pop();
        const min2 = minHeap.pop();

        minHeap.push(min1+min2*2);
        num++;
    }
    
    return minHeap.top() >= K ? num : -1;
}