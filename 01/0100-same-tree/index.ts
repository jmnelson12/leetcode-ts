// difficulty: easy
// link: https://leetcode.com/problems/same-tree/

/*
  Example 1:
  ------------------------
  Input:     1         1
            / \       / \
          2   3     2   3

          [1,2,3],   [1,2,3]

  Output: true

  Example 2:
  ------------------------
  Input:     1         1
            /           \
          2             2

          [1,2],     [1,null,2]

  Output: false


  Example 3:
  ------------------------
  Input:     1         1
            / \       / \
          2   1     1   2

          [1,2,1],   [1,1,2]

  Output: false

  Constraints:
  ------------------------

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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p?.val !== q?.val) return false

  if (p && q) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)

  return true
}
