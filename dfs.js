// depth first search (DFS)
// Go deep before moving sideways

// Three types:

// PreOrder
// PostOrder
// InOrder

// DFS uses recursion or stack.

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

  // Root → Left → Right
  DFSPreOrder() {
    let data = [];

    const traverse = (node) => {
      data.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return data;
  }

  // Left → Right → Root
  DFSPostOrder() {
    let data = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node.value);
    };

    traverse(this.root);

    return data;
  }

  // Left → Root → Right
  DFSInOrder() {
    let data = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return data;
  }

  isValidBST() {
    const arr = this.DFSInOrder();

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= arr[i - 1]) return false;
    }

    return true;
  }
}
