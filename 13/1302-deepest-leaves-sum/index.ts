// difficulty: medium
// link: https://leetcode.com/problems/deepest-leaves-sum/

/*
  Example 1:
  ------------------------
  Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
  Output: 15

  Constraints:
  ------------------------
    * The number of nodes in the tree is between 1 and 10^4.
    * The value of nodes is between 1 and 100.

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

function deepestLeavesSum(root: TreeNode | null): number {
  if (!root) return 0

  const queue = [root]
  let deepestSum = 0

  while (queue.length) {
    const queueSize = queue.length
    let levelTotal = 0

    for (let i = 0; i < queueSize; i++) {
      const node = queue.shift()
      if (node) {
        levelTotal += node.val
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }

    deepestSum = levelTotal
  }

  return deepestSum
}
