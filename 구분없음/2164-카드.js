const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  add(value) {
    const node = new Node(value);

    if (!this.head) this.head = node;
    else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.size++;

    return node;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }

  getSize() {
    return this.size;
  }
}

const node = new LinkedList();

for (let i = 1; i <= Number(input); i++) {
  node.add(i);
}

while (node.getSize() !== 1) {
  node.removeHead();
  node.add(node.getHead());
  node.removeHead();
}

console.log(node.getHead());
