/*
  More-Info:
    - https://www.geeksforgeeks.org/merge-sort/

  Youtube Videos:
    - https://www.youtube.com/watch?v=TzeBrDU-JaY

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
function merge(arr: number[], left: number, middle: number, right: number) {
  // sizes of two sub arrays
  const LSubArrSize = middle - left + 1
  const RSubArrSize = right - middle

  const LSubArr: number[] = new Array(LSubArrSize)
  const RSubArr: number[] = new Array(RSubArrSize)

  // set data to temp arrays
  for (let i = 0; i < LSubArrSize; i++) {
    LSubArr[i] = arr[left + i]
  }
  for (let i = 0; i < RSubArrSize; i++) {
    RSubArr[i] = arr[middle + 1 + i]
  }

  // merge temp arrays
  let LSubArrIndex = 0
  let RSubArrIndex = 0
  let arrIndex = 0

  while (LSubArrIndex < LSubArrSize && RSubArrIndex < RSubArrSize) {
    if (LSubArr[LSubArrIndex] < RSubArr[RSubArrIndex]) {
      arr[arrIndex] = LSubArr[LSubArrIndex]
      LSubArrIndex++
    } else {
      arr[arrIndex] = RSubArr[RSubArrIndex]
      RSubArrIndex++
    }
    arrIndex++
  }

  // copy remaining LSubArr elements if any
  while (LSubArrIndex < LSubArrSize) {
    arr[arrIndex] = LSubArr[LSubArrIndex]
    LSubArrIndex++
    arrIndex++
  }

  // copy remaining RSubArr elements if any
  while (RSubArrIndex < RSubArrSize) {
    arr[arrIndex] = RSubArr[RSubArrIndex]
    RSubArrIndex++
    arrIndex++
  }
}
function mergeSort(arr: number[], left: number, right: number): number[] {
  if (left < right) {
    // get the middle point
    // const middle = Math.floor((left + (right - left)) / 2)
    const middle = Math.floor((left + right) / 2)

    // sort halves
    mergeSort(arr, left, middle)
    mergeSort(arr, middle + 1, right)

    // merge sorted halves
    merge(arr, left, middle, right)
  }

  return arr
}

// Testing
const small = generateArrOfRandomNumbers(10, { max: 20 })
const medium = generateArrOfRandomNumbers(75)
const large = generateArrOfRandomNumbers(1000)

console.log(`small arr: [${small}]\n`)
// console.log(`medium arr: [${medium}]\n`)
// console.log(`large arr: [${large}]\n`)

console.log('===========================\n===========================\n')

console.time('runtime')
console.log(`sorted small arr: ${mergeSort(small, 0, small.length - 1)}`)
console.timeEnd('runtime')
console.log()
