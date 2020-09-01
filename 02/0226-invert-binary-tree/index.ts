// difficulty: easy
// link: https://leetcode.com/problems/invert-binary-tree/

/*
  Example 1:
  ------------------------
  Input:

      4
     /   \
    2     7
   / \   / \
  1   3 6   9

  Output:

       4
     /   \
    7     2
   / \   / \
  9   6 3   1

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

// Recursively
// Doing depth first approach
function invertTreeRecursively(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  // replace the left node with the right and vise versa
  const temp = root.left
  root.left = root.right
  root.right = temp

  // run recursively for all of the child nodes of the current root
  if (root.left) invertTreeRecursively(root.left)
  if (root.right) invertTreeRecursively(root.right)

  return root
}

// Iteratively
function invertTreeIteratively(root: TreeNode | null): TreeNode | null {
  const queue = [root]

  while (queue.length) {
    const node = queue.shift()

    if (node) {
      // replace the left node with the right and vise versa
      const temp = node.left
      node.left = node.right
      node.right = temp

      // push child nodes to queue so they can be an as well
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return root
}
