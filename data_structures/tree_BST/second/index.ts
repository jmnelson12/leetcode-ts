/*

  What Is It:
    A Binary Search Tree is a data structure that has nodes. Each node has a value, a left node, and a right node. The left node is less than the current nodes value, and the right node is greater than the current nodes values.

    A tree also has 2 has to iterate though it:
      - Breadth First Search (BFS)
      - Depth First Search (DFS)
        - InOrder
        - PreOrder
        - PostOrder

  When To Use:
    Use when numbers can be compare in < or > manner

  Space Complexity:
    O(n)

  Time Complexity:
    Access:
      Avg: O (log n)
      Worst: O (n)

    Search:
      Avg: O (log n)
      Worst: O (n)

    Insert:
      Avg: O(log n)
      Worst: O(n)

    Delete:
      Avg: O(log n)
      Worst: O(n)

*/

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
  public printPreOrder() {
    const dfs = (node: TreeNode) => {
      console.log(node.data)
      if (node.left) dfs(node.left)
      if (node.right) dfs(node.right)
    }
    dfs(this.root)
  }
  public printPostOrder() {
    const dfs = (node: TreeNode) => {
      if (node.left) dfs(node.left)
      if (node.right) dfs(node.right)
      console.log(node.data)
    }
    dfs(this.root)
  }
  public printUsingBreadth() {
    const stack = [this.root]

    while (stack.length) {
      const size = stack.length

      for (let i = 0; i < size; i++) {
        const node = stack.shift()
        console.log(node.data)

        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
      }
    }
  }
}

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

console.log('\x1b[34m%s\x1b[0m', '----- Should be true ----- ')
console.log(`containsIterativelyDFS: ${myTree.contains(3)}`)

console.log('\x1b[34m%s\x1b[0m', '\n----- Should be false -----')
console.log(`containsIterativelyDFS: ${myTree.contains(4)}`)

console.log('\x1b[34m%s\x1b[0m', '\n----- printInOrder -----')
myTree.printInOrder()

console.log('\x1b[34m%s\x1b[0m', '\n----- printPreOrder -----')
myTree.printPreOrder()

console.log('\x1b[34m%s\x1b[0m', '\n----- printPostOrder -----')
myTree.printPostOrder()

console.log('\x1b[34m%s\x1b[0m', '\n----- printUsingBreadth -----')
myTree.printUsingBreadth()
