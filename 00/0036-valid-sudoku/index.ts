// difficulty: medium
// link: https://leetcode.com/problems/valid-sudoku

/*
  Example 1:
  ------------------------
  Input:
  [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
  Output: true

  Example 2:
  ------------------------
  Input:
  [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
  Output: false
  Explanation: Same as Example 1, except with the 5 in the top left corner being
      modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.


  Constraints:
  ------------------------
    * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    * Only the filled cells need to be validated according to the mentioned rules.
    * The given board contain only digits 1-9 and the character '.'.
    * The given board size is always 9x9.

*/

function isValidSudoku(board: string[][]): boolean {
  const hashSet = new Set()

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let currentNum = board[i][j]

      if (currentNum !== '.') {
        let rowStr = `${currentNum} is in row ${i}`
        let colStr = `${currentNum} is in col ${j}`
        let subBoxStr = `${currentNum} is in sub box ${Math.floor(
          i / 3
        )}-${Math.floor(j / 3)}`

        if (
          hashSet.has(rowStr) ||
          hashSet.has(colStr) ||
          hashSet.has(subBoxStr)
        )
          return false

        hashSet.add(rowStr)
        hashSet.add(colStr)
        hashSet.add(subBoxStr)
      }
    }
  }

  return true
}

console.time('runtime')
console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
)
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
)
console.timeEnd('runtime')
console.log()
