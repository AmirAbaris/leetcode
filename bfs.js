// breadth first search (BFS)
//       10
//      /  \
//     5    15
//    / \     \
//   2   7     20

// 10 → 5 → 15 → 2 → 7 → 20

// Uses a queue.

// Idea:

// Start with root
// Add children to queue
// Process them one by one

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
 
class BST {
  constructor() {
    this.root = null;
  }

  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();

      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }
}
