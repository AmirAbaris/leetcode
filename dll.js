class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DLL {
  constructor(value) {
    if (value === undefined) {
      this.head = null;
      this.tail = null;
      this.len = 0;
    } else {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.len = 1;
    }
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.len++;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.len++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.tail;

    if (this.len === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;

      temp.prev = null;
    }
    this.len--;

    return temp;
  }

  // leetcode
  isPalindrome() {
    let start = this.head;
    let end = this.tail;

    for (let i = 0; i < Math.floor((this.len - 1) / 2); i++) {
      if (start !== end) return false;

      start = start.next;
      end = end.prev;
    }

    return true;
  }

  reverse() {
    let current = this.head;
    let temp = null;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return this;
  }

  partitionList(x) {
    let temp = this.head;
    const less = new DLL();
    const greaterOrEq = new DLL();

    while (temp) {
      if (temp.value < x) {
        less.push(temp.value);
      } else {
        greaterOrEq.push(temp.value);
      }
      temp = temp.next;
    }

    if (!less.head) return greaterOrEq;
    if (!greaterOrEq.head) return less;

    less.tail.next = greaterOrEq.head;
    greaterOrEq.prev = less.tail;

    less.tail = greaterOrEq.tail;
    less.len += greaterOrEq.len;

    return less;
  }
}
