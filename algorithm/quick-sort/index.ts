/*
  More-Info:
    - https://www.geeksforgeeks.org/quick-sort/
    - (Lomuto) https://en.wikipedia.org/wiki/Quicksort#Lomuto_partition_scheme
    - (Hoare) https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme

  Youtube Videos:
    - https://www.youtube.com/watch?v=eqo2LxRADhU
    - https://www.youtube.com/watch?v=COk73cpQbFQ
    - https://www.youtube.com/watch?v=SLauY6PpjW4
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
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

// Implementation
function LPartition(arr: number[], start: number, end: number): number {
  const pivotValue = arr[end]
  let pivotIndex = start

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex)
      pivotIndex++
    }
  }

  swap(arr, end, pivotIndex)

  return pivotIndex
}

function quickSort(arr: number[], start: number, end: number) {
  if (start >= end) return

  let index = LPartition(arr, start, end)

  quickSort(arr, start, index - 1)
  quickSort(arr, index + 1, end)

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
console.log(`sorted small arr: [${quickSort(small, 0, small.length - 1)}]`)
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(`sorted medium arr: [${quickSort(medium, 0, medium.length - 1)}]`)
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(`sorted large arr: [${quickSort(large, 0, large.length - 1)}]`)
console.timeEnd('runtime')
console.log()
