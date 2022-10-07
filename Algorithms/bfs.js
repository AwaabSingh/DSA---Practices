class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          // left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }

          currentNode = currentNode.left;
        } else {
          // right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    // check is there is a root node
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    // loop will stop when ever the current node no longer exit
    while (currentNode) {
      if (value < currentNode.value) {
        // go left
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // go right
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //  if the node is a match
        return currentNode;
      }
      //   if there is no match
      return false;
    }
  }
  // remove
  remove(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    //  reference to the parentNode
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        // go left
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // GO RIGHT
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode === value) {
        // We have a match

        // no right child
        if (currentNode === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            // make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
          return true;
        }
      }
    }
  }
  bfs() {
    let currentNode = this.root;
    //  keep the travesal
    let list = [];
    // keep track of the level so we can assess the children
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      // take
      currentNode = queue.shift();
      console.log(currentNode.value);
      list.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
  bfsR(queue, list) {
    if (!queue.length) {
      return list;
    }
    const currentNode = queue.shift();
    list.push(currentNode.value)
    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.bfsR(queue, list)
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.bfs();
tree.bfsR([this.root], []);
const res = JSON.stringify(traverse(tree.root));
console.log(res);
//  console.log(tree.remove(170));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
