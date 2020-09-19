// difficulty: medium
// link: https://leetcode.com/problems/diagonal-traverse/

/*
  Example 1:
  ------------------------
  Input:
  [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
  ]

  Output:  [1,2,4,7,5,3,6,8,9]


  Constraints:
  ------------------------
    * The total number of elements of the given matrix will not exceed 10,000.

*/

function findDiagonalOrder(matrix: number[][]): number[] {
  if (!matrix.length) return []
  const i = matrix.length
  const j = matrix[0].length

  const result: number[] = []
  let row = 0
  let col = 0
  let dir = 1

  for (let y = 0; y < i * j; y++) {
    result.push(matrix[row][col])
    row -= dir
    col += dir

    if (row >= i) {
      row = i - 1
      col += 2
      dir = -dir
    }
    if (col >= j) {
      col = j - 1
      row += 2
      dir = -dir
    }

    if (row < 0) {
      row = 0
      dir = -dir
    }
    if (col < 0) {
      col = 0
      dir = -dir
    }
  }

  return result
}

console.time('runtime')
console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(
  findDiagonalOrder([
    [9, 8, 7],
    [6, 5, 4],
  ])
)
console.timeEnd('runtime')
console.log()
