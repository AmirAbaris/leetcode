class Heap {
  #heap = [];

  getHeap() {
    // returns copy of the heap
    // no access to private heap!
    return [...this.#heap];
  }

  #leftChild(index) {
    return 2 * index + 1;
  }

  #rightChild(index) {
    return 2 * index + 2;
  }

  #parent(index) {
    return Math.floor((index - 1) / 2);
  }

  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [
      this.#heap[index2],
      this.#heap[index1],
    ];
  }

  insert(value) {
    this.#heap.push(value);

    let current = this.#heap.length - 1;

    while (
      current > 0 &&
      this.#heap[current] > this.#heap[this.#parent(current)]
    ) {
      this.#swap(current, this.#parent(current));
      current = this.#parent(current);
    }
  }

  remove() {
    if (!this.#heap.length === 0) {
      return null;
    }

    if (this.#heap.length === 1) {
      return this.#heap.pop();
    }

    const maxValue = this.#heap[0];
    this.#heap[0] = this.#heap.pop();
    this.#sinkDown(0);

    return maxValue;
  }

  #sinkDown(index) {
    let largest = index;
    while (true) {
      const left = this.#leftChild(index);
      const right = this.#rightChild(index);

      if (left < this.#heap.length && this.#heap[left] > this.#heap[largest]) {
        largest = left;
      }

      if (
        right < this.#heap.length &&
        this.#heap[right] > this.#heap[largest]
      ) {
        largest = right;
      }

      if (largest === index) break;

      this.#swap(largest, index);

      index = largest;
    }
  }
}
