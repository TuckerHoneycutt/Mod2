// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
/*
              4
           /     \
          2       6
        /   \   /   \
       1     3 5     7
*/

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    const newNode = new TreeNode(val);

    // if there is no root
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    // if the value is less than the current node's value
    if (val < currentNode.val) {
      // check if there is a node to the left
      // if not we've found the spot
      if (!currentNode.left) {
        currentNode.left = newNode;
        return this;
      } else {
        return this.insert(val, currentNode.left);
      }
    }

    // if the value is greater than the current node's value
    if (val > currentNode.val) {
      // check if there is a node to the right
      // if not we've found the spot
      if (!currentNode.right) {
        currentNode.right = newNode;
        return this;
      } else {
        return this.insert(val, currentNode.right);
      }
    }


  }

/*
              4 
           /     \
          2       6
        /   \   /   \
       1     3 5     7
*/
// target = 3
  search(val) {
    // Your code here
    let curr = this.root;

    while (curr) {
      if (curr.val === val) return true;

      if (val < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }

    return false;
  }

  search2(val, curr=this.root) {
    if (!curr) return false;
    if (curr.val === val) return true;
    if (curr.val > val) return this.search2(val, curr.left);
    if (curr.val < val) return this.search2(val, curr.right);
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}


// const bst = new BinarySearchTree();
// bst.insert(4);
// bst.insert(2);
// bst.insert(6);
// bst.insert(1);
// bst.insert(3);
// bst.insert(5);
// bst.insert(7);

// console.log(bst.root.right.left)

// console.log(bst.search2(5))

module.exports = { BinarySearchTree, TreeNode };
