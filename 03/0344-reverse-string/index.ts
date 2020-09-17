// difficulty: easy
// link: https://leetcode.com/problems/reverse-string

/*
  Example 1:
  ------------------------
  Input: ["h","e","l","l","o"]
  Output: ["o","l","l","e","h"]

  Example 2:
  ------------------------
  Input: ["H","a","n","n","a","h"]
  Output: ["h","a","n","n","a","H"]

  Constraints:
  ------------------------
    * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

*/

function reverseStringIteratively(s: string[]): void {
  let len = Math.floor(s.length / 2)
  for (let i = 0; i < len; i++) {
    const j = s.length - 1 - i // opposite char index
    let temp = s[i]
    s[i] = s[j]
    s[j] = temp
  }
}

// recursive solution
function reverseString(s: string[]): void {
  helper(s, 0, s.length - 1)
}

function helper(strArr: string[], start: number, end: number) {
  if (start >= end) return

  let temp = strArr[start]
  strArr[start] = strArr[end]
  strArr[end] = temp

  helper(strArr, start + 1, end - 1)
}
const testOne = ['h', 'e', 'l', 'l', 'o']
const testTwo = ['H', 'a', 'n', 'n', 'a', 'h']

// iteratively
console.time('runtime')
reverseStringIteratively(testOne)
console.log(testOne)
console.timeEnd('runtime')
console.log()

console.time('runtime')
reverseStringIteratively(testTwo)
console.log(testTwo)
console.timeEnd('runtime')
console.log()


// recursively
console.time('runtime')
reverseString(testOne)
console.log(testOne)
console.timeEnd('runtime')
console.log()

console.time('runtime')
reverseString(testTwo)
console.log(testTwo)
console.timeEnd('runtime')
console.log()
