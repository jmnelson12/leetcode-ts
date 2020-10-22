// difficulty: easy
// link: https://leetcode.com/problems/range-sum-of-bst/

/*
  Example 1:
  ------------------------
  Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
  Output: 32

  Example 2:
  ------------------------
  Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
  Output: 23


  Constraints:
  ------------------------
    * The number of nodes in the tree is at most 10000.
    * The final answer is guaranteed to be less than 2^31.


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

function rangeSumBST(root: TreeNode | null, L: number, R: number): number {
  if (!root) return 0
  if (L > root.val) return rangeSumBST(root.right, L, R)
  if (R < root.val) return rangeSumBST(root.left, L, R)

  return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R)
}
