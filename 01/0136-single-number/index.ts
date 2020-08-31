// difficulty: easy
// link: https://leetcode.com/problems/single-number/

/*
  Example 1:
  ------------------------
  Input: [2,2,1]
  Output: 1

  Example 2:
  ------------------------
  Input: [4,1,2,1,2]
  Output: 4


  Constraints:
  ------------------------
    * non-empty array of Int's

*/

function singleNumber(nums: number[]): number {
  const hashMap: { [key: number]: number } = {}

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.hasOwnProperty(nums[i])) {
      hashMap[nums[i]]++
    } else {
      hashMap[nums[i]] = 0
    }
  }

  for (let i in hashMap) {
    if (hashMap[i] === 0) return Number(i)
  }

  return 0
}

console.time('runtime')
console.log(singleNumber([2, 2, 1]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(singleNumber([4, 1, 2, 1, 2]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(singleNumber([-1, -1, -2]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(singleNumber([0]))
console.timeEnd('runtime')
console.log()
