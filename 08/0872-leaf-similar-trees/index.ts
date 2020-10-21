// difficulty: easy
// link: https://leetcode.com/problems/leaf-similar-trees/

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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const dfs = (node: TreeNode | null, leaves: number[]) => {
    if (node) {
      if (!node.left && !node.right) {
        leaves.push(node.val)
      }

      dfs(node?.left, leaves)
      dfs(node?.right, leaves)
    }
  }

  const leaves1: number[] = []
  const leaves2: number[] = []
  dfs(root1, leaves1)
  dfs(root2, leaves2)

  return (
    leaves1.length == leaves2.length &&
    leaves1.every((v, i) => v === leaves2[i])
  )
}
