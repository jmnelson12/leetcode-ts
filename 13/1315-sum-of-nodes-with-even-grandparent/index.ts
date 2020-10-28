// difficulty: Medium
// link: https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/

/*
  Example 1:
  ------------------------
  Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
  Output: 18
  Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.


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

function sumEvenGrandparent(root: TreeNode | null): number {
  const res = [0]
  dfs(root, 0, 0, res)
  return res[0]
}

function dfs(
  current: TreeNode | null,
  parent: number,
  grandParent: number,
  res: number[]
) {
  if (!current) return
  if (grandParent && grandParent % 2 === 0) {
    res[0] += current.val
  }

  dfs(current.left, current.val, parent, res)
  dfs(current.right, current.val, parent, res)
}
