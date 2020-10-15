/*
  Space Complexity:
    O(n) - n size of BST

  Time Complexity:
    Avg: O(log n)
    Worst: O(n) - It's this because we aren't balancing it

*/

// Setup
class TreeNode {
  public data: any
  public left?: TreeNode
  public right?: TreeNode

  constructor(data: any) {
    this.data = data
  }
}

class BST {
  /* --------------------------------- FIELDS --------------------------------- */
  public root: TreeNode

  constructor(root: TreeNode) {
    this.root = root
  }

  /* --------------------------------- METHODS -------------------------------- */
  public insert(data: any) {
    const newNode = new TreeNode(data)

    const stack = [this.root]

    while (stack.length) {
      const node = stack.shift()

      if (data <= node.data) {
        // go left
        if (!node.left) {
          node.left = newNode
        } else {
          stack.push(node.left)
        }
      } else {
        // go right
        if (!node.right) {
          node.right = newNode
        } else {
          stack.push(node.right)
        }
      }
    }
  }

  public contains(data: any) {
    const stack = [this.root]

    while (stack.length) {
      const node = stack.shift()

      if (node) {
        if (node.data === data) return true
        stack.push(data <= node.data ? node.left : node.right)
      }
    }

    return false
  }

  public printInOrder() {
    const dfs = (node: TreeNode) => {
      if (node.left) dfs(node.left)
      console.log(node.data)
      if (node.right) dfs(node.right)
    }
    dfs(this.root)
  }
}

// Implementation
function BSTSearch(root: TreeNode | null, value: number) {
  if (!root) return false
  if (root.data === value) return true

  if (value <= root.data) return BSTSearch(root.left, value)
  return BSTSearch(root.right, value)
}

// Testing
const myTree = new BST(new TreeNode(25))
myTree.insert(20)
myTree.insert(30)
myTree.insert(25)
myTree.insert(15)
myTree.insert(46)
myTree.insert(45)
myTree.insert(47)
myTree.insert(1)
myTree.insert(2)
myTree.insert(3)
myTree.insert(10)
myTree.insert(75)
myTree.insert(12)

console.log('Tree')
myTree.printInOrder()
console.log()

console.time('runtime')
console.log(`Contains 10? ${BSTSearch(myTree.root, 10)}`)
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(`Contains 46? ${BSTSearch(myTree.root, 46)}`)
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(`Contains 565? ${BSTSearch(myTree.root, 565)}`)
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(`Contains -55? ${BSTSearch(myTree.root, -55)}`)
console.timeEnd('runtime')
console.log()
