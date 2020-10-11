/*
  Space Complexity:
    O(n)

  Time Complexity:
    Avg: O(log n)
    Worst: O(log n)

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
function binarySearchThroughArr(
  arr: number[],
  start: number,
  end: number,
  value: number
) {
  if (start > end) return false

  const mid = Math.ceil((start + end) / 2)
  if (arr[mid] === value) return true

  if (value < arr[mid])
    return binarySearchThroughArr(arr, start, mid - 1, value)

  return binarySearchThroughArr(arr, mid + 1, end, value)
}

// Testing
const small = generateArrOfRandomNumbers(10).sort((a, b) => a - b)
const medium = generateArrOfRandomNumbers(75).sort((a, b) => a - b)
const large = generateArrOfRandomNumbers(1000).sort((a, b) => a - b)

console.log(`small arr: [${small}]\n`)
console.log(`medium arr: [${medium}]\n`)
console.log(`large arr: [${large}]\n`)

console.log('===========================\n===========================\n')

console.time('runtime')
console.log('10:', binarySearchThroughArr(small, 0, small.length - 1, 10))
console.timeEnd('runtime')

console.time('runtime')
console.log(
  `${small[3]}:`,
  binarySearchThroughArr(small, 0, small.length - 1, small[3])
)
console.timeEnd('runtime')

console.log('----------')

console.time('runtime')
console.log('10:', binarySearchThroughArr(medium, 0, medium.length - 1, 10))
console.timeEnd('runtime')

console.time('runtime')
console.log(
  `${medium[3]}:`,
  binarySearchThroughArr(medium, 0, medium.length - 1, medium[3])
)
console.timeEnd('runtime')

console.log('----------')

console.time('runtime')
console.log('10:', binarySearchThroughArr(large, 0, large.length - 1, 10))
console.timeEnd('runtime')

console.time('runtime')
console.log(
  `${large[3]}:`,
  binarySearchThroughArr(large, 0, large.length - 1, large[3])
)
console.timeEnd('runtime')
