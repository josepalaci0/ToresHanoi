class Node {
  constructor(value) {
    this.id = `Tile-${value}`;
    this.value = value;
    this.width = 2 * value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.next = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
    return this;
  }

  peek() {
    return this.top;
  }

  pop() {
    if (this.length !== 0) {
      this.top = this.top.next;
      this.length--;
    }
    return this;
  }

  traverse() {
    let list = [];
    let currentNode = this.top;
    while (currentNode) {
      list.push(currentNode);
      currentNode = currentNode.next;
    }
    return list;
  }
}

export default Stack;
