// difficulty: easy
// link: https://leetcode.com/problems/merge-two-binary-trees/

/*
  Example 1:
  ------------------------

  Input:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7

  Output:
  Merged tree:
        3
        / \
      4   5
      / \   \
    5   4   7

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

function mergeTreesRecursively(
  t1: TreeNode | null,
  t2: TreeNode | null
): TreeNode | null {
  if (!t1) return t2
  if (!t2) return t1

  t1.val += t2.val

  t1.left = mergeTreesRecursively(t1.left, t2.left)
  t1.right = mergeTreesRecursively(t1.right, t2.right)

  return t1
}

function mergeTreesIteratively(
  t1: TreeNode | null,
  t2: TreeNode | null
): TreeNode | null {
  if (!t1) return t2
  if (!t2) return t1

  const stack: [TreeNode | null, TreeNode | null][] = [[t1, t2]]

  while (stack.length) {
    const treeNodeGroup = stack.pop() || []
    const t1Node = treeNodeGroup[0]
    const t2Node = treeNodeGroup[1]

    if (t1Node == null || t2Node == null) {
      continue
    }

    t1Node.val += t2Node.val
    if (!t1Node.left) {
      t1Node.left = t2Node.left
    } else {
      stack.push([t1Node.left, t2Node.left])
    }

    if (!t1Node.right) {
      t1Node.right = t2Node.right
    } else {
      stack.push([t1Node.right, t2Node.right])
    }
  }

  return t1
}
