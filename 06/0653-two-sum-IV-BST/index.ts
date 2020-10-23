// difficulty: easy
// link: https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

/*
  Example 1:
  ------------------------

  Example 2:
  ------------------------

  Example 3:
  ------------------------


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

function findTarget(root: TreeNode | null, k: number): boolean {
  const hashSet: Set<number> = new Set()
  return dfs(root, k, hashSet)
}

function dfs(root: TreeNode | null, k: number, hashSet: Set<number>): boolean {
  if (!root) return false
  if (hashSet.has(k - root.val)) return true
  hashSet.add(root.val)
  return dfs(root.left, k, hashSet) || dfs(root.right, k, hashSet)
}
