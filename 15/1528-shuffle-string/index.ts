// difficulty: easy
// link: https://leetcode.com/problems/shuffle-string/

/*
  Example 1:
  ------------------------
  Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
  Output: "leetcode"
  Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

  Example 2:
  ------------------------
  Input: s = "abc", indices = [0,1,2]
  Output: "abc"
  Explanation: After shuffling, each character remains in its position.

  Example 3:
  ------------------------
  Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
  Output: "arigatou"

  Constraints:
  ------------------------
    * s.length == indices.length == n
    * 1 <= n <= 100
    * s contains only lower-case English letters.
    * 0 <= indices[i] < n
    * All values of indices are unique (i.e. indices is a permutation of the integers from 0 to n - 1).

*/

function restoreString(s: string, indices: number[]): string {
  let output = new Array(s.length)

  for (let i = 0; i < indices.length; i++) {
    output[indices[i]] = s.charAt(i)
  }

  return output.join('')
}

console.time('runtime')
console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(restoreString('abc', [0, 1, 2]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(restoreString('aaiougrt', [4, 0, 2, 6, 7, 3, 1, 5]))
console.timeEnd('runtime')
console.log()
