// difficulty: medium
// link: https://leetcode.com/problems/find-duplicate-subtrees

/*
  Example 1:
  ------------------------
  Input: root = [1,2,3,4,null,2,4,null,null,4]
  Output: [[2,4],[4]]

  Example 2:
  ------------------------
  Input: root = [2,1,1]
  Output: [[1]]

  Example 3:
  ------------------------
  Input: root = [2,2,2,3,null,3,null]
  Output: [[2,3],[3]]


  Constraints:
  ------------------------
    * The number of the nodes in the tree will be in the range [1, 10^4]
    * -200 <= Node.val <= 200

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

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const hashMap = new Map()
  const output: Array<TreeNode | null> = []

  const dfs = (node: TreeNode | null): string => {
    if (!node) return ''

    const key: string = `${node.val},${dfs(node.left)},${dfs(node.right)}`
    const value = (hashMap.get(key) || 0) + 1

    hashMap.set(key, value)

    if (value === 2) output.push(node)

    return key
  }

  dfs(root)
  return output
}
