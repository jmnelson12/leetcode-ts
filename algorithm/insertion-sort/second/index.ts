/*
  Space Complexity: O(1)

  Time Complexity:
    Avg: O(n^2)
    Worst: O(n^2)

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
function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let j = i
    let y = i - 1

    while (y >= 0 && arr[j] < arr[y]) {
      swap(arr, j, y)
      j--
      y--
    }
  }

  return arr
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
console.log(`sorted small arr: [${insertionSort(small)}]\n`)
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(`sorted medium arr: [${insertionSort(medium)}]\n`)
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(`sorted large arr: [${insertionSort(large)}]\n`)
console.timeEnd('runtime')
console.log()
