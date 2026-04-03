class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.len = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;

    this.len++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let prev = this.head;
    let temp = this.head;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    this.tail.next = null;
    temp.next = null;
    this.len--;

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.len++;

    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.len--;

    return temp;
  }

  get(index) {
    if (!this.head) return undefined;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  // leetcode
  // 1, 2, 3, 4, 5, 6, 7, 8
  findMiddleNode() {
    if (!this.head) return undefined;
    let slow = this.head;
    let fast = this.head;

    while (fast) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  hasLoop() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast === slow) return true;
    }

    return false;
  }

  removeDuplicates() {
    const seen = new Set();
    let prev = null;
    let current = this.head;

    while (current) {
      if (seen.has(current.value)) {
        prev.next = current.next;
        this.len--;
      } else {
        seen.add(current.value);
        prev = current;
      }
      current = current.next;
    }
  }

  findKthFromEnd(k) {
    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i < k; ++i) {
      if (!fast) return null;
      fast = fast.next;
    }

    while (fast) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow;
  }
}

const list = new LinkedList(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);

console.log("linked list", list);
