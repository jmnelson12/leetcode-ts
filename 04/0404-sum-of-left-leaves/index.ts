// difficulty: easy
// link: https://leetcode.com/problems/sum-of-left-leaves/

/*
  Example 1:
  ------------------------
      3
    / \
    9  20
      /  \
    15   7

  There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

*/

function sumOfLeftLeaves(root: TreeNode | null, isLeft = false): number {
  if (!root) return 0
  if (isLeft && !root.left && !root.right) return root.val

  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right)
}
