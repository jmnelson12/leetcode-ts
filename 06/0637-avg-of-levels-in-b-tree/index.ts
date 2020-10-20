// difficulty: easy
// link: https://leetcode.com/problems/average-of-levels-in-binary-tree/

/*
  Example 1:
  ------------------------
    Input:
        3
       / \
      9  20
        /  \
      15   7

    Output: [3, 14.5, 11]

    Explanation:
    The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

  Constraints:
  ------------------------
    * The range of node's value is in the range of 32-bit signed integer.

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

function averageOfLevels(root: TreeNode | null): number[] {
  const output: number[] = []

  const queue = [root]

  while (queue.length) {
    const size = queue.length
    let rowTotal = 0

    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      if (node) {
        rowTotal += node.val

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }

    output.push(rowTotal / size)
  }

  return output
}
