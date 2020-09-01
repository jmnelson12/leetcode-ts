// difficulty: easy
// link: https://leetcode.com/problems/move-zeroes/

/*
  Example 1:
  ------------------------
  Input: [0,1,0,3,12]
  Output: [1,3,12,0,0]


  Constraints:
  ------------------------
    * array not empty
    * You must do this in-place without making a copy of the array.
    * Minimize the total number of operations.

*/

function moveZeroes(numbers: number[]): void {
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] === 0) {
      numbers.splice(i, 1)
      numbers.push(0)
    }
  }
}
const test1Array = [0, 1, 0, 3, 12]

console.time('runtime')
moveZeroes(test1Array)
console.log(test1Array)
console.timeEnd('runtime')
console.log()
