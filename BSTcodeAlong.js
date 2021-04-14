class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;
    let newNode = new Node(value);
    const searchTree = (node) => {
      // if value is less than node.value, go left
      // if value is greater than node.value, go right
      if (value < node.value) {
        if (!node.left) {
          // if no left child, append new node
          node.left = new Node(value);
        } else {
          // if left child, look again
          searchTree(node.left);
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = new Node(value);
        } else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  max() {
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode;
  }

  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.node) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  //depth first search = looking branch by branch

  // 1) in-order
  // left, root, right.
  // left > root > right.
  dfsInOrder() {
    let result = [];

    const traverse = (node) => {
      // if left child exists, go left again
      if (node.left) traverse(node.left);
      // capture root node value
      result.push(node.value);
      // if right child exists, go right again
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return result;
  }

  // 2) pre-order
  // root, left, right
  dfsPreOrder() {
    let result = [];

    const traverse = (node) => {
      // if left child exists, go left again
      // capture root node value
      result.push(node.value);
      if (node.left) traverse(node.left);
      // if right child exists, go right again
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  // 3) post-order
  // left, right, root
  dfsPostOrder() {
    const traverse = (node) => {
      // if left child exists, go left again
      if (node.left) traverse(node.left);
      // if right child exists, go right again
      if (node.right) traverse(node.right);
      // capture root node value
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  //breadth first search = level by level
  // implementing a queue!

  bfs() {
    let result = [];
    let q = [];
    q.push(this.root);
    while (q.length) {
      let currentNode = q.shift();
      result.push(currentNode.value);
      if (currentNode.left) {
        q.push(currentNode.left);
      }
      if (currentNode.right) {
        q.push(currentNode.right);
      }
    }
    return result;
  }
}

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

console.log(bst);
console.log(bst.size());
console.log(bst.min());
console.log(bst.max());
