/*
  Space Complexity: O(N)

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

// Implementation
function binarySearchThroughArr(
  arr: number[],
  start: number,
  end: number,
  value: number
): boolean {
  if (start > end) return false

  const mid = Math.ceil((start + end) / 2)

  if (arr[mid] === value) return true
  if (arr[mid] > value)
    // go through left
    return binarySearchThroughArr(arr, start, mid - 1, value)

  // go through right
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
console.log(binarySearchThroughArr(small, 0, small.length - 1, 10))
console.timeEnd('runtime')

console.time('runtime')
console.log(binarySearchThroughArr(small, 0, small.length - 1, small[3]))
console.timeEnd('runtime')

console.log('----------')

console.time('runtime')
console.log(binarySearchThroughArr(medium, 0, medium.length - 1, 10))
console.timeEnd('runtime')

console.time('runtime')
console.log(binarySearchThroughArr(medium, 0, medium.length - 1, medium[3]))
console.timeEnd('runtime')

console.log('----------')

console.time('runtime')
console.log(binarySearchThroughArr(large, 0, large.length - 1, 10))
console.timeEnd('runtime')

console.time('runtime')
console.log(binarySearchThroughArr(large, 0, large.length - 1, large[3]))
console.timeEnd('runtime')
