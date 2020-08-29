// difficulty: easy
// link: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

/*

  Example 1:
  ------------------------
  Input: num = 14
  Output: 6
  Explanation:
  Step 1) 14 is even; divide by 2 and obtain 7.
  Step 2) 7 is odd; subtract 1 and obtain 6.
  Step 3) 6 is even; divide by 2 and obtain 3.
  Step 4) 3 is odd; subtract 1 and obtain 2.
  Step 5) 2 is even; divide by 2 and obtain 1.
  Step 6) 1 is odd; subtract 1 and obtain 0.

  Example 2:
  ------------------------
  Input: num = 8
  Output: 4
  Explanation:
  Step 1) 8 is even; divide by 2 and obtain 4.
  Step 2) 4 is even; divide by 2 and obtain 2.
  Step 3) 2 is even; divide by 2 and obtain 1.
  Step 4) 1 is odd; subtract 1 and obtain 0.

  Example 3:
  ------------------------
  Input: num = 1000000
  Output: 26

  Constraints:
  ------------------------
    * 0 <= num <= 10^6

*/

function numberOfSteps(num: number): number {
  let steps = 0

  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2
    } else {
      num--
    }

    steps++
  }

  return steps
}

console.time('attempt 1')
console.log(numberOfSteps(14))
console.timeEnd('attempt 1')
console.log()

console.time('attempt 2')
console.log(numberOfSteps(8))
console.timeEnd('attempt 2')
console.log()

console.time('attempt 3')
console.log(numberOfSteps(1000000))
console.timeEnd('attempt 3')
console.log()
