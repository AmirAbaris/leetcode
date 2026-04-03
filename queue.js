class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;

    this.len = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.len === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.len++;
  }

  dequeue() {
    if (this.len === 0) return undefined;

    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;

    this.len--;
    return temp;
  }
}
