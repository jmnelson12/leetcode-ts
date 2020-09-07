// difficulty: easy
// link: https://leetcode.com/problems/isomorphic-strings

/*
  Example 1:
  ------------------------
  Input: s = "egg", t = "add"
  Output: true

  Example 2:
  ------------------------
  Input: s = "foo", t = "bar"
  Output: false

  Example 3:
  ------------------------
  Input: s = "paper", t = "title"
  Output: true


*/

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const hashMap = new Map()

  for (let i = 0; i < s.length; i++) {
    if (!hashMap.has(s.charAt(i))) {
      hashMap.set(s.charAt(i), t.charAt(i))
    } else {
      // duplicate
      if (hashMap.get(s[i]) !== t[i]) return false
    }
  }

  return new Set([...hashMap.values()]).size === hashMap.size
}

console.time('runtime')
console.log(isIsomorphic('egg', 'add'))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(isIsomorphic('foo', 'bar'))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(isIsomorphic('paper', 'title'))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(isIsomorphic('aa', 'ab'))
console.timeEnd('runtime')
console.log()
