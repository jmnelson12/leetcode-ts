// difficulty: easy
// link: https://leetcode.com/problems/jewels-and-stones/

/*
  Example 1:
  ------------------------
  Input: J = "aA", S = "aAAbbbb"
  Output: 3

  Example 2:
  ------------------------
  Input: J = "z", S = "ZZ"
  Output: 0


  Constraints:
  ------------------------
    * S and J will consist of letters and have length at most 50.
    * The characters in J are distinct.

*/

function numJewelsInStones(J: string, S: string): number {
  const jewels = J.split('')
  let total = 0

  let i = S.length
  while (i--) {
    if (jewels.includes(S.charAt(i))) {
      total++
    }
  }

  return total
}

console.time('runtime')
console.log(numJewelsInStones('aA', 'aAAbbbb'))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(numJewelsInStones('z', 'ZZ'))
console.timeEnd('runtime')
console.log()
