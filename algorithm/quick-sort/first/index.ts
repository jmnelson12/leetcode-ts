/*
  Space Complexity:
    in-place sorting

  Time Complexity:
    Avg: O(n log n)
    Worst: o(n^2)

*/

// utils
function generateArrOfRandomNumbers(
  size: number,
  { min = 1, max = 5000 }: { min?: number; max?: number } = {}
) {
  const arr: number[] = new Array(size - 1)

  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * (max - min) + min)
  }

  return arr
}

function swap(arr: number[], i: number, j: number) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// Implementation
function partition(arr: number[], start: number, end: number): number {
  const pivotValue = arr[end]
  let swapIndex = start

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, swapIndex, i)
      swapIndex++
    }
  }

  swap(arr, swapIndex, end)

  return swapIndex
}
function quickSort(arr: number[], start: number, end: number): void {
  if (start >= end) return

  let index = partition(arr, start, end)
  quickSort(arr, start, index - 1)
  quickSort(arr, index + 1, end)
}

// Testing
const small = generateArrOfRandomNumbers(10)
const medium = generateArrOfRandomNumbers(75)
const large = generateArrOfRandomNumbers(1000)

console.log(`small arr: [${small}]\n`)
console.log(`medium arr: [${medium}]\n`)
console.log(`large arr: [${large}]\n`)

console.log('===========================\n===========================\n')

console.time('runtime')
quickSort(small, 0, small.length - 1)
console.log(`small sorted: [${small}]`)
console.timeEnd('runtime')
console.log()

console.time('runtime')
quickSort(medium, 0, medium.length - 1)
console.log(`medium sorted: [${medium}]`)
console.timeEnd('runtime')
console.log()

console.time('runtime')
quickSort(large, 0, large.length - 1)
console.log(`large sorted: [${large}]`)
console.timeEnd('runtime')
console.log()
