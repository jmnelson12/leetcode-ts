// difficulty: medium
// link: https://leetcode.com/problems/group-anagrams

/*
  Example 1:
  ------------------------
  Input: strs = ["eat","tea","tan","ate","nat","bat"]
  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

  Example 2:
  ------------------------
  Input: strs = [""]
  Output: [[""]]

  Example 3:
  ------------------------
  Input: strs = ["a"]
  Output: [["a"]]

  Constraints:
  ------------------------
    * 1 <= strs.length <= 104
    * 0 <= strs[i].length <= 100
    * strs[i] consists of lower-case English letters.

*/

function groupAnagrams(strs: string[]): string[][] {
  const hashMap: any = {}

  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split('').sort().join('')
    if (hashMap.hasOwnProperty(sorted)) {
      hashMap[sorted].push(strs[i])
    } else {
      hashMap[sorted] = [strs[i]]
    }
  }

  return Object.values(hashMap)
}

console.time('runtime')
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(groupAnagrams(['']))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(groupAnagrams(['a']))
console.timeEnd('runtime')
console.log()
