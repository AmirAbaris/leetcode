class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.len = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.len === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pop() {
    if (!this.top) return undefined;

    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;

    this.len--;

    return temp;
  }
}
