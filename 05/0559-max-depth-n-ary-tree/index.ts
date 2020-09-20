// difficulty: easy
// link: https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

/*
  Example 1:
  ------------------------
  Input: root = [1,null,3,2,4,null,5,6]
  Output: 3

  Example 2:
  ------------------------
  Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
  Output: 5


  Constraints:
  ------------------------
    * The depth of the n-ary tree is less than or equal to 1000.
    * The total number of nodes is between [0, 10^4].

*/

var maxDepth = function (root) {
  if (!root) return 0

  const queue = [root]
  let depth = 0

  while (queue.length) {
    const queueLen = queue.length

    for (let i = 0; i < queueLen; i++) {
      const node = queue.shift()
      const childrenLen = node?.children.length || 0

      for (let j = 0; j < childrenLen; j++) {
        queue.push(node.children[j])
      }
    }

    depth += 1
  }

  return depth
}
