// A Tree is a data structure that holds data, when visualized, resembles a tree in real life (with branches, so on so forth)
// *** arrays are linear datastructures
// *** trees are heirarchal datastructures!

// *****peerJs ?
// *****learn python!
// *****make a technical twitter
// *****look into a new UI for personal page. Material UI, etc etc

// All data points in a tree are called Nodes
// The Node at the top of the Tree is called a Root node
// Nodes with branches leading to others are referred to as Parent Nodes
// The nodes at the end of that branch are called Children
// Nodes with no children are called Leaf nodes
// Two child nodes that are next to each other are called Siblings

// Binary Trees are special types of Trees.
// While a tree data structure can have any # of branches at a single node, a Binary Tree can only have up to two branches to a single node.

// Binary Search Trees are special types of Binary trees that naturally stays sorted because it follows these rules below:
// Binary search trees are ORDERED.
// Each Left subtree is less-than or equal to the parent node
// Each Right Subtree is greater-than or equal to the parent node

// a BST is balanced when:
// Its left and right subtrees have roughly the same amount of nodes, does not have to be exactly the same.
// If it were exact, it would be referred to as a Perfect Binary Search Tree, which is RARE.

// BST'S can become so unbalanced that they become a degenerate tree, also known as a linked list or unary tree.

// There are also Self Balancing Binary Search Trees such as:
// ***look up***
// Red/Black trees?
// AVL trees
// Because it uses the concept of Binary Search, each lookup is in Logarithmic time, or O(log of n), faster than linear time, which would require finding items by Key, but slower than a hash table, constant time



class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    // first, create a reference to the root node using a variable.
    const node = this.root;
    // check to see if the tree is empty, if there is no root, set it to be a new node with the data inserted
    if (node === null) {
      this.root = new Node(data);
      return;
      // else, create a function that recursively searches for the correct place to insert the new node, depending on the value of the data.
      // call that function searchTree
    } else {
      const searchTree = (node) => {
        // searchTree takes in a node, because we will be recursively calling search tree on different nodes in order to find the correct placement for the node depending on its value.
        // we will be doing our placements based on whether or not node.data is > or < than data.
        if (data > node.data) {
          // remember the rules for a binary tree in regards to where the nodes are placed.
          // all the nodes on the right are larger than the root,
          // all the nodes on the left are smaller than the root.

          // First, we check to see if the data we are trying to insert is larger than the data in our node, to check if it goes on the right.
          if (node.right === null) {
            // if it is larger than the right, but the node right is empty, make our new node with our data there.
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            // if it is larger than the right, but the node to the right is not empty, call the function again but pass in the right node. it'll recursively search the subtree for the insertion placement, or call itself again to search.
            return searchTree(node.right);
          }
        } else if (data < node.data) {
          // repeat for left side.
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    const current = this.root;
    // use a while loop to iterate to the leftmost leafnode in your binary search tree.
    // first, establish a reference for your root.
    while (current.left) {
      // while there are more nodes to the left, travel further left.
      current = current.left;
    }
    return current.data; // return the last node you find on the left side.
  }

  findMax() {
    const current = this.root;
    // use a while loop to iterate to the rightmost leafnode in your binary search tree.
    // first, establish a reference for yor root.
    while (current.right) {
      // while there are more nodes to the right, travel further on your right.
      current = current.right;
    }
    return current.data; // return the last node you find <3
  }

  find(data) {
    // first the reference.
    const current = this.root;
    while (current.data !== data) {
      // while its not the node we're looking for, continue looking.
      if (data < current.data) {
        // if the root is bigger than what we're looking for, search the left side
        // set the current to be the current.left
        current = current.left;
      } else {
        // otherwise, search the right side
        // set the current to be the current.right
        current = current.right;
      }
      if (current === null) {
        // if the root is empty, the tree is empty, so theres nothing to search for. return null
        return null;
      }
    }
    return current; // return the node.
  }

  isPresent(data) {
    const current = this.root;
    // reference to root
    while (current) {
      // while current !== null
      if (data === current.data) {
        // if the root is what we're looking for, return true
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    // create a function called removeNode, a recursive function
    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        // node has no children
        if (node.left === null && node.right === null) {
          return null;
        }

        // node has no left child
        if (node.left === null) {
          return node.right;
        }

        // node has no right child
        if (node.right === null) {
          return node.left;
        }

        //node has two children
        // create a temporary node to represent the right child
        const tempNode = node.right;
        // use a while loop to iterate to the leftmost node from that right child
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        // set the node.data to be the leftmostnode data you got from the while loop above
        node.right = removeNode(node.right, tempNode.data);
        // call the recursive function on right, and pass in the tempnode.data
        return node;
      } else if (data < node.data) {
          // search left and right depending on if data is less than or bigger than the node.data
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    // call function
    this.root = removeNode(this.root, data);
  }
}

// add
// findMin
// findMax
// find
// remove
// dfs
// bfs