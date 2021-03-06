// difficulty: easy
// link: https://leetcode.com/problems/roman-to-integer/

/*
  Example 1:
  Input: "III"
  Output: 3

  Example 2:
  Input: "IV"
  Output: 4

  Example 3:
  Input: "IX"
  Output: 9

  Example 4:
  Input: "LVIII"
  Output: 58
  Explanation: L = 50, V= 5, III = 3.

  Example 5:
  Input: "MCMXCIV"
  Output: 1994

  Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

*/

const symbolMap: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function romanToInt(s: string): number {
  let total = 0

  for (let i = 0; i < s.length; i++) {
    const currentSymbol = s.charAt(i)
    const nextSymbol = s.charAt(i + 1)

    if (symbolMap[currentSymbol] < symbolMap[nextSymbol]) {
      total -= symbolMap[currentSymbol]
    } else {
      total += symbolMap[currentSymbol]
    }
  }

  return total
}

console.time('runtime')
console.log(romanToInt('III'))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(romanToInt('IV'))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(romanToInt('IX'))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(romanToInt('LVIII'))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(romanToInt('MCMXCIV'))
console.timeEnd('runtime')
console.log()
