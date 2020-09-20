// difficulty: easy
// link: https://leetcode.com/problems/increasing-order-search-tree/

/*
  Example 1:
  ------------------------
  Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

        5
       / \
      3   6
     / \   \
    2   4   8
   /       / \
  1       7   9

  Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

  1
   \
    2
     \
      3
       \
        4
         \
          5
           \
            6
             \
              7
               \
                8
                 \
                  9


  Constraints:
  ------------------------
    * The number of nodes in the given tree will be between 1 and 100.
    * Each node will have a unique integer value from 0 to 1000.

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

function increasingBST(root: TreeNode | null): TreeNode | null {
  const newTree: TreeNode = new TreeNode(0)
  // reference to newTree
  let current = newTree

  const inorder = (node: TreeNode | null) => {
    if (!node) return

    inorder(node.left)

    node.left = null
    // set right value then update the refrence to
    // be the newly added node
    current.right = node
    current = node

    inorder(node.right)
  }
  inorder(root)

  return newTree?.right
}
