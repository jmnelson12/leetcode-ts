// difficulty: easy
// link: https://leetcode.com/problems/contains-duplicate-ii

/*
  Example 1:
  ------------------------
  Input: nums = [1,2,3,1], k = 3
  Output: true

  Example 2:
  ------------------------
  Input: nums = [1,0,1,1], k = 1
  Output: true

  Example 3:
  ------------------------
  Input: nums = [1,2,3,1,2,3], k = 2
  Output: false

  Constraints:
  ------------------------

*/

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const hashMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) {
      let prevIndex = hashMap.get(nums[i])

      if (i - prevIndex <= k) return true
    }
    hashMap.set(nums[i], i)
  }

  return false
}

console.time('runtime')
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
console.timeEnd('runtime')
console.log()
