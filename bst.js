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

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (true) {
      // edge case for equal
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (!this.root) return false;

    let temp = this.root;

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }

      return false;
    }
  }

  // Helper to find the minimum node in a subtree (used for deletion)
  #findMinNode(node) {
    let current = node;
    while (current && current.left !== null) {
      current = current.left;
    }
    return current;
  }

  delete(value) {
    // Helper recursive function to handle deletion
    const deleteNode = (currentNode, valueToDelete) => {
      // Base case: Tree is empty or value not found
      if (!currentNode) {
        return null;
      }

      // If the value to delete is smaller than the current node's value,
      // then it lies in the left subtree
      if (valueToDelete < currentNode.value) {
        currentNode.left = deleteNode(currentNode.left, valueToDelete);
      }
      // If the value to delete is greater than the current node's value,
      // then it lies in the right subtree
      else if (valueToDelete > currentNode.value) {
        currentNode.right = deleteNode(currentNode.right, valueToDelete);
      }
      // If value is same as current node's value, then this is the node to be deleted
      else {
        // Case 1: Node with only one child or no child
        if (currentNode.left === null) {
          // If left child is null, return right child (which can be null too)
          return currentNode.right;
        } else if (currentNode.right === null) {
          // If right child is null, return left child
          return currentNode.left;
        }

        // Case 2: Node with two children
        // Get the inorder successor (smallest in the right subtree)
        const temp = this.#findMinNode(currentNode.right);

        // Copy the inorder successor's value to this node
        currentNode.value = temp.value;

        // Delete the inorder successor from the right subtree
        currentNode.right = deleteNode(currentNode.right, temp.value);
      }
      // Return the (potentially modified) current node
      return currentNode;
    };

    // Start the deletion process from the root
    this.root = deleteNode(this.root, value);
    return this; // Return the BST instance
  }

  isValidBST() {
    let prev = -Infinity;

    const traverse = (node) => {
      if (!node) return true;

      if (!traverse(node.left)) return false;

      if (node.value <= prev) return false;
      prev = node.value;

      return traverse(node.right);
    };

    return traverse(this.root);
  }

  // solve math depth
}
