// difficulty: easy
// link: https://leetcode.com/problems/ransom-note/

/*
  Example 1:
  ------------------------
  Input: ransomNote = "a", magazine = "b"
  Output: false

  Example 2:
  ------------------------
  Input: ransomNote = "aa", magazine = "ab"
  Output: false

  Example 3:
  ------------------------
  Input: ransomNote = "aa", magazine = "aab"
  Output: true

  Constraints:
  ------------------------
    * You may assume that both strings contain only lowercase letters.


*/

function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineCharFreqs = new Map()

  // get the frequency of each character in the magazine string
  for (let i = 0; i < magazine.length; i++) {
    magazineCharFreqs.set(
      magazine[i],
      (magazineCharFreqs.get(magazine[i]) || 0) + 1
    )
  }

  // test if that character both exists and isn't = 0 for the ransom note
  for (let i = 0; i < ransomNote.length; i++) {
    const currentFreq = magazineCharFreqs.get(ransomNote[i])
    if (!currentFreq) return false

    magazineCharFreqs.set(ransomNote[i], currentFreq - 1)
  }

  return true
}

console.time('runtime')
console.log(canConstruct('a', 'b'))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(canConstruct('aa', 'ab'))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(canConstruct('aa', 'aab'))
console.timeEnd('runtime')
console.log()
