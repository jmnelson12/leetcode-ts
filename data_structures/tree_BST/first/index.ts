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
    Use when numbers can be compared in < or > manner

  Space Complexity:
    O(n) - where n is the number of nodes

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
  public root: TreeNode | null

  constructor(root: TreeNode = null) {
    this.root = root
  }

  /* --------------------------------- METHODS -------------------------------- */
  private insertRecursively(root: TreeNode | null, data: any): TreeNode | null {
    if (!root) {
      root = new TreeNode(data)
      return root
    }

    if (data <= root.data) {
      root.left = this.insertRecursively(root.left, data)
    } else if (data > root.data) {
      root.right = this.insertRecursively(root.right, data)
    }

    return root
  }

  public insert(data: any): void {
    this.root = this.insertRecursively(this.root, data)
  }

  public contains(data: any): boolean {
    // look using a stack
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

  // DFS
  // InOrder
  private printInOrderRecursively(root: TreeNode | null): void {
    if (root) {
      this.printInOrderRecursively(root.left)
      console.log(`(InOrder) data is: ${root.data}`)
      this.printInOrderRecursively(root.right)
    }
  }
  public printInOrder(): void {
    this.printInOrderRecursively(this.root)
  }

  // PreOrder
  private printPreOrderRecursively(root: TreeNode | null): void {
    if (root) {
      console.log(`(PreOrder) data is: ${root.data}`)
      this.printPreOrderRecursively(root.left)
      this.printPreOrderRecursively(root.right)
    }
  }
  public printPreOrder(): void {
    this.printPreOrderRecursively(this.root)
  }

  // PostOrder
  private printPostOrderRecursively(root: TreeNode | null): void {
    if (root) {
      this.printPostOrderRecursively(root.left)
      this.printPostOrderRecursively(root.right)
      console.log(`(PostOrder) data is: ${root.data}`)
    }
  }
  public printPostOrder(): void {
    this.printPostOrderRecursively(this.root)
  }

  // BFS
  public printUsingBreadth(): void {
    const stack = [this.root]

    while (stack.length) {
      const rowLength = stack.length

      for (let i = 0; i < rowLength; i++) {
        const node = stack.shift()

        console.log(`(Breadth) data is: ${node.data}`)

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
