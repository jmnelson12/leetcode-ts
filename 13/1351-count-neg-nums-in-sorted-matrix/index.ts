// difficulty: easy
// link: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

/*
  Example 1:
  ------------------------
  Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
  Output: 8
  Explanation: There are 8 negatives number in the matrix.

  Example 2:
  ------------------------
  Input: grid = [[3,2],[1,0]]
  Output: 0

  Example 3:
  ------------------------
  Input: grid = [[1,-1],[-1,-1]]
  Output: 3

  Constraints:
  ------------------------
    * m == grid.length
    * n == grid[i].length
    * 1 <= m, n <= 100
    * -100 <= grid[i][j] <= 100

*/

function getFirstNegNumIndex(nums: number[]) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] < 0) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
}

function countNegatives(grid: number[][]): number {
  let count = 0

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i]
    const index = getFirstNegNumIndex(row)
    count += row.length - index
  }

  return count
}

console.time('runtime')
console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
)
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(
  countNegatives([
    [3, 2],
    [1, 0],
  ])
)
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(
  countNegatives([
    [1, -1],
    [-1, -1],
  ])
)
console.timeEnd('runtime')
console.log()
