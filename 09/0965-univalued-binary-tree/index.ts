// difficulty: easy
// link: https://leetcode.com/problems/univalued-binary-tree/

/*
  Example 1:
  ------------------------
  Input: [1,1,1,1,1,null,1]
  Output: true

  Example 2:
  ------------------------
  Input: [2,2,2,5,2]
  Output: false


  Constraints:
  ------------------------
    * The number of nodes in the given tree will be in the range [1, 100].
    * Each node's value will be an integer in the range [0, 99].


*/

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function isUnivalTree(root: TreeNode | null): boolean {
  if (!root) return false

  const value = root.val
  const stack = [root]

  while (stack.length) {
    const node = stack.pop()

    if (node) {
      if (node.val !== value) return false

      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
    }
  }

  return true
}
