class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = node;
          return this;
        } else {
          current = current.left;
        }
      }

      if (val > current.val) {
        if (current.right === null) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    function helper() {
      if (val === current.val) return "Error! duplicate value.";
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
        return helper();
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
        return helper();
      }
    }
    return helper(this.root);
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined;

    let current = this.root;
    while (true) {
      if (val === current.val) return current;
      if (val < current.val) {
        if (current.left === null) {
          return undefined;
        } else {
          current = current.left;
        }
      }
      if (val > current.val) {
        if (current.right === null) {
          return undefined;
        }
        current = current.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (!this.root) return undefined;

    if (val < current.val) {
      if (current.left === null) {
        return undefined;
      } else {
        current = current.left;
        return this.findRecursively(val, current);
      }
    }
    if (val > current.val) {
      if (current.right === null) {
        return undefined;
      } else {
        current = current.right;
        return this.findRecursively(val, current);
      }
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(arr = [], node = this.root) {
    if (!this.root) return undefined;

    arr.push(node.val);
    if (node.left) this.dfsPreOrder(arr, node.left);
    if (node.right) this.dfsPreOrder(arr, node.right);
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(arr = [], node = this.root) {
    if (!this.root) return undefined;
    if (node.left) this.dfsInOrder(arr, node.left);
    arr.push(node.val);
    if (node.right) this.dfsInOrder(arr, node.right);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(arr = [], node = this.root) {
    if (!this.root) return undefined;
    if (node.left) this.dfsPostOrder(arr, node.left);
    if (node.right) this.dfsPostOrder(arr, node.right);
    arr.push(node.val);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) return undefined;
    const queue = [this.root];
    const arrOfVals = [];
    while (queue.length) {
      let current = queue.shift();
      arrOfVals.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return arrOfVals;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
