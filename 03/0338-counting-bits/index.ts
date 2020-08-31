// difficulty: medium
// link: https://leetcode.com/problems/counting-bits/

/*
  Example 1:
  ------------------------
  Input: 2
  Output: [0,1,1]

  Example 2:
  ------------------------
  Input: 5
  Output: [0,1,1,2,1,2]

*/

function countBits(num: number): number[] {
  if (num === 0) return [0]
  if (num === 1) return [0, 1]
  const results: number[] = [0, 1, 1]

  for (let i = 3; i <= num; i++) {
    const binaryString = (i >>> 0).toString(2)

    results[i] = (binaryString.match(/1/g) || []).length
  }

  return results
}

console.time('runtime')
console.log(countBits(2))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(countBits(5))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(countBits(100))
console.timeEnd('runtime')
console.log()
