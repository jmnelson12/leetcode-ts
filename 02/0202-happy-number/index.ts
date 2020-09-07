// difficulty: easy
// link: https://leetcode.com/problems/happy-number

/*
  Example 1:
  ------------------------
  Input: 19
  Output: true
  Explanation:
  12 + 92 = 82
  82 + 22 = 68
  62 + 82 = 100
  12 + 02 + 02 = 1

*/

function isHappy(n: number): boolean {
  const hashSet = new Set()

  while (n !== 1 && !hashSet.has(n)) {
    hashSet.add(n)

    let temp = 0
    while (n > 0) {
      temp += Math.pow(n % 10, 2)
      n = Math.floor(n / 10)
    }

    n = temp
  }

  return n === 1
}

console.time('runtime')
console.log(isHappy(19))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(isHappy(7))
console.timeEnd('runtime')
console.log()
