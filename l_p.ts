class LNode {
  val: string | null;
  next: LNode | null;

  constructor(value: string) {
    this.val = value;
    this.next = null;
  }
}

class LinkedList {
  private head: LNode | null;
  private tail: LNode | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Insert at the beginning (O(1))
  prepend(value: string) {
    const newNode = new LNode(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  // Insert at the end (O(1) with tail)
  append(value: string) {
    // ex: 1 -> 2, new value = 5
    // should be 1 -> 2 -> 5
    // should update tail next and tail should move to new node
    // also handle no node edge case

    const newNode = new LNode(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  }

  // Insert at a specific index
  insert(index: number, value: string) {
    const newNode = new LNode(value);
    let current = this.head;
    let prev = null;

    // starting idx
    // example of 1 -> 2 , insert(0, 5) -> 5, 1, 2
    if (index === 0) {
      let temp = this.head;
      this.head = newNode;
      this.head!.next = temp;

      return newNode;
    }

    // ending idx
    if (this.length === index) {
      // example of 1 -> 2 , insert(1, 5) -> 1, 2 -> 5

      let temp = this.tail;
      temp!.next = newNode;
      this.tail = newNode;

      return newNode;
    }

    // middle idx
    for (let i = 0; i < index; i++) {
      // ex: 2 -> 3 -> 4, insert(5, 1) -> 2 -> 5 -> 3 -> 4
      prev = current;
      current = current!.next;
      // prev: 2, curr: 3
    }

    let temp = current;
    prev!.next = newNode;
    newNode.next = temp;

    return newNode;
  }

  // Remove the first node
  removeFirst() {
    if (!this.head) return undefined;

    // ex: 1, removeFirst() -> null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return this;
    }

    // ex: 1 -> 2 -> 3, removeFirst() -> 2 -> 3
    let temp = this.head;
    this.head = this.head!.next;
    temp!.next = null;

    return this;
  }

  // Remove the last node
  removeLast() {
    if (!this.head) return undefined;

    // ex: 1, removeLast(): null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;

      return this;
    }

    // ex: 1 -> 2, removeLast(): 1
    // should get to prev of item we wanna remove
    let current = this.head;
    let prev = null;
    for (let i = 0; i < this.length - 1; i++) {
      prev = current;
      current = current!.next!;
    }

    this.tail = prev;
    prev!.next = null;
    return this;
  }

  // Remove a node by index
  remove(index: number) {}

  // Remove the first node with the given value
  removeValue(value: string) {}

  // Update the value at an index
  set(index: number, value: string) {}

  // Find the index of a value
  find(value: string) {}

  // Check if a value exists
  contains(value: string) {}

  // Reverse the linked list
  reverse() {}

  // Return the number of nodes
  size() {}

  // Check if the list is empty
  isEmpty() {}

  // Remove all nodes
  clear() {}

  // Print all values (or return them as an array)
  print() {}

  // Convert the list to an array
  toArray() {}
}
