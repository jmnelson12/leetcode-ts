// difficulty: easy
// link: https://leetcode.com/problems/valid-parentheses/

/*
  Example 1:
  Input: s = "()"
  Output: true

  Example 2:
  Input: s = "()[]{}"
  Output: true

  Example 3:
  Input: s = "(]"
  Output: false

  Example 4:
  Input: s = "([)]"
  Output: false

  Example 5:
  Input: s = "{[]}"
  Output: true


  Constraints:
  ------------------------
    * 1 <= s.length <= 104
    * s consists of parentheses only '()[]{}'.

*/
function isValid(s: string): boolean {
  const stack = []

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i)

    if (char === '(') {
      stack.push(')')
    } else if (char === '[') {
      stack.push(']')
    } else if (char === '{') {
      stack.push('}')
    } else if (!stack.length || stack.pop() !== char) return false
  }

  return !stack.length
}

console.time('runtime')
console.log(isValid('()'))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(isValid('()[]{}'))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(isValid('(]'))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(isValid('([)]'))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(isValid('{[]}'))
console.timeEnd('runtime')
console.log()
