// difficulty: easy
// link: https://leetcode.com/problems/path-sum

/*
  Example 1:
  ------------------------
    Given the below binary tree and sum = 22,

          5
        / \
        4   8
      /   / \
      11  13  4
    /  \      \
    7    2      1

    return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
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

function hasPathSum(root: TreeNode | null, sum: number, pathSum = 0): boolean {
  if (!root) return false
  const hasSum = (pathSum += root.val)
  if (!root.left && !root.right && hasSum === sum) return true
  return (
    hasPathSum(root.left, sum, pathSum) || hasPathSum(root.right, sum, pathSum)
  )
}
