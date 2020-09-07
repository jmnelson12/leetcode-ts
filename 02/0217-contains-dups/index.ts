// difficulty: easy
// link: https://leetcode.com/problems/contains-duplicate/

/*
  Example 1:
  ------------------------
  Input: [1,2,3,1]
  Output: true

  Example 2:
  ------------------------
  Input: [1,2,3,4]
  Output: false

  Example 3:
  ------------------------
  Input: [1,1,1,3,3,4,3,2,4,2]
  Output: true

*/

function containsDuplicateNoSet(nums: number[]): boolean {
  const hashMap: { [key: string]: number } = {}

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.hasOwnProperty(nums[i])) return true

    hashMap[nums[i]] = 1
  }

  return false
}

function containsDuplicateWithSet(nums: number[]): boolean {
  const copy = [...new Set(nums)]

  return copy.length !== nums.length
}

console.time('runtime')
console.log(containsDuplicateNoSet([1, 2, 3, 1]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(containsDuplicateNoSet([1, 2, 3, 4]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(containsDuplicateNoSet([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
console.timeEnd('runtime')
console.log()

console.log('#####################\n#####################')

console.time('runtime')
console.log(containsDuplicateWithSet([1, 2, 3, 1]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(containsDuplicateWithSet([1, 2, 3, 4]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(containsDuplicateWithSet([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
console.timeEnd('runtime')
console.log()
