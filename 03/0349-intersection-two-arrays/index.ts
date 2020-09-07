// difficulty: easy
// link: https://leetcode.com/explore/learn/card/hash-table/183/combination-with-other-algorithms/1105/

/*
  Example 1:
  ------------------------
  Input: nums1 = [1,2,2,1], nums2 = [2,2]
  Output: [2]

  Example 2:
  ------------------------
  Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  Output: [9,4]

  Constraints:
  ------------------------
    * Each element in the result must be unique.
    * The result can be in any order.

*/

function intersection(nums1: number[], nums2: number[]): number[] {
  const hashSet = new Set()

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      hashSet.add(nums1[i])
    }
  }

  return [...hashSet] as number[]
}

console.time('runtime')
console.log(intersection([1, 2, 2, 1], [2, 2]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
console.timeEnd('runtime')
console.log()
