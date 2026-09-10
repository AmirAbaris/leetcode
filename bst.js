class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor(val) {
    this.root = null;
  }

  insert(value, currentNode = this.root) {
    // base case
    if (currentNode === null) return new Node(value);

    if (value < currentNode.value) {
      currentNode.left = this.insert(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.insert(value, currentNode.right);
    }

    return currentNode;
  }

  delete(value, currentNode = this.root) {
    if (currentNode === null) return null;

    if (value < currentNode.value) {
      currentNode.left = this.delete(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.delete(value, currentNode.right);
    } else {
      if (currentNode.left === null) {
        return currentNode.right;
      }

      if (currentNode.right === null) {
        return currentNode.left;
      }

      let successor = currentNode.right;

      while (successor.left !== null) {
        successor = successor.left;
      }

      currentNode.value = successor.value;

      currentNode.right = this.delete(successor.value, currentNode.right);
    }

    return currentNode;
  }

  reverse(node) {
    if (node === null) return;

    this.reverse(node.left);
    this.reverse(node.right);

    let temp = node.left;
    node.left = node.right;
    node.right = temp;
  }
}
