// difficulty: easy
// link: https://leetcode.com/problems/can-place-flowers/

/*
  Example 1:
  ------------------------
  Input: flowerbed = [1,0,0,0,1], n = 1
  Output: True

  Example 2:
  ------------------------
  Input: flowerbed = [1,0,0,0,1], n = 2
  Output: False

  Example 3:
  ------------------------
  Input: flowerbed = [0,0,1,0,0,0,1], n = 2
  Output: True

  Constraints:
  ------------------------
    * The input array won't violate no-adjacent-flowers rule.
    * The input array size is in the range of [1, 20000].
    * n is a non-negative integer which won't exceed the input array size.

*/

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let totalPlaced = 0

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] !== 1 && !flowerbed[i - 1] && !flowerbed[i + 1]) {
      totalPlaced++
      flowerbed[i] = 1
    }
    if (totalPlaced >= n) return true
  }

  return false
}

console.time('runtime')
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(canPlaceFlowers([0, 0, 1, 0, 0, 0, 1], 2))
console.timeEnd('runtime')
console.log()
