// difficulty: easy
// link: https://leetcode.com/problems/peak-index-in-a-mountain-array/

/*
  Example 1:
  Input: arr = [0,1,0]
  Output: 1

  Example 2:
  Input: arr = [0,2,1,0]
  Output: 1

  Example 3:
  Input: arr = [24,69,100,99,79,78,67,36,26,19]
  Output: 2


  Constraints:
  ------------------------
    * 3 <= arr.length <= 104
    * 0 <= arr[i] <= 106
    * arr is guaranteed to be a mountain array.

*/

function peakIndexInMountainArray(arr: number[]): number {
  let maxValue = arr[0]
  let index = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i]
      index = i
    }
  }

  return index
}

function peakIndexInMountainArrayJsMethods(arr: number[]): number {
  return arr.indexOf(Math.max(...arr))
}

// no js method
console.time('runtime')
console.log(peakIndexInMountainArray([0, 1, 0]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(peakIndexInMountainArray([0, 2, 1, 0]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]))
console.timeEnd('runtime')
console.log()

console.log('------')

// js method
console.time('runtime')
console.log(peakIndexInMountainArrayJsMethods([0, 1, 0]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(peakIndexInMountainArrayJsMethods([0, 2, 1, 0]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(
  peakIndexInMountainArrayJsMethods([24, 69, 100, 99, 79, 78, 67, 36, 26, 19])
)
console.timeEnd('runtime')
console.log()
