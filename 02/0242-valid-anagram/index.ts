// difficulty: easy
// link: https://leetcode.com/problems/valid-anagram/

/*
  Example 1:
  ------------------------
  Input: s = "anagram", t = "nagaram"
  Output: true

  Example 2:
  ------------------------
  Input: s = "rat", t = "car"
  Output: false


  Constraints:
  ------------------------
    * You may assume the string contains only lowercase alphabets.

*/

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const hashMap: { [key: string]: number } = {}

  for (let char of s) {
    hashMap[char] = (hashMap[char] || 0) + 1
  }
  for (let char of t) {
    if (!hashMap.hasOwnProperty(char)) return false
    hashMap[char]--
  }

  return Object.values(hashMap).every((v) => !v)
}

console.time('runtime')
console.log(isAnagram('anagram', 'nagaram'))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(isAnagram('rat', 'car'))
console.timeEnd('runtime')
console.log()
