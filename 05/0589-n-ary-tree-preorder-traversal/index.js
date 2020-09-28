// difficulty: easy
// link: https://leetcode.com/problems/n-ary-tree-preorder-traversal/

/*
  Example 1:
  ------------------------
  Input: root = [1,null,3,2,4,null,5,6]
  Output: [1,3,5,6,2,4]

  Example 2:
  ------------------------
  Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
  Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]


  Constraints:
  ------------------------
    * The height of the n-ary tree is less than or equal to 1000
    * The total number of nodes is between [0, 10^4]

*/

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return []
  let output = []

  const dfs = (node) => {
    if (node) {
      output.push(node.val)

      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i]) {
          dfs(node.children[i])
        }
      }
    }
  }
  dfs(root)

  return output
}

console.time('runtime')
console.log('function goes here...')
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log('function goes here...')
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log('function goes here...')
console.timeEnd('runtime')
console.log()
