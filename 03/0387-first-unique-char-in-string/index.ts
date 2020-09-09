// difficulty: easy
// link: https://leetcode.com/problems/first-unique-character-in-a-string

/*
  Example 1:
  ------------------------
  s = "leetcode"
  return 0.

  Example 2:
  ------------------------
  s = "loveleetcode"
  return 2.

  Example 3:
  ------------------------
  s = "cc"
  return -1.

  Constraints:
  ------------------------
    * You may assume the string contains only lowercase English letters.


*/

function firstUniqChar(s: string): number {
  const hashMap: { [key: string]: { count: number; index: number } } = {}
  let result = s.length

  for (let i = 0; i < s.length; i++) {
    if (hashMap.hasOwnProperty(s[i])) {
      hashMap[s[i]].count++
      hashMap[s[i]].index = i
    } else {
      hashMap[s[i]] = { count: 0, index: i }
    }
  }

  for (const [key, value] of Object.entries(hashMap)) {
    if (value.count === 0 && value.index < result) {
      result = value.index
    }
  }

  return result === s.length ? -1 : result
}

console.time('runtime')
console.log(firstUniqChar('leetcode'))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(firstUniqChar('loveleetcode'))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(firstUniqChar('cc'))
console.timeEnd('runtime')
console.log()
