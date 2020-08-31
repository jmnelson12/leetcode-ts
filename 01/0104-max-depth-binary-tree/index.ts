// difficulty: easy
// link: https://leetcode.com/problems/maximum-depth-of-binary-tree/

/*
  Example 1:
  ------------------------

  Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

   return its depth = 3.

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

// BFS
function maxDepthBFS(root: TreeNode | null): number {
  let depth = 0

  if (!root) return depth

  const queue = [root]

  while (queue.length) {
    const size = queue.length

    for (let i = 0; i < size; i++) {
      const node = queue.shift()

      if (node) {
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
    depth++
  }

  return depth
}

// DFS
function maxDepthDFS(root: TreeNode | null): number {
  let maxDepth = 0
  if (!root) return maxDepth

  const recursive = (node: TreeNode | null, depth: number) => {
    if (node) {
      maxDepth = Math.max(maxDepth, depth)

      if (node.left) recursive(node.left, depth + 1)
      if (node.right) recursive(node.right, depth + 1)
    }
  }

  recursive(root, 1)

  return maxDepth
}
