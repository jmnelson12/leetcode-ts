// difficulty: easy
// link: https://leetcode.com/problems/shuffle-the-array/

/*
  Example 1:
  ------------------------
  Input: nums = [2,5,1,3,4,7], n = 3
  Output: [2,3,5,4,1,7]
  Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

  Example 2:
  ------------------------
  Input: nums = [1,2,3,4,4,3,2,1], n = 4
  Output: [1,4,2,3,3,2,4,1]

  Example 3:
  ------------------------
  Input: nums = [1,1,2,2], n = 2
  Output: [1,2,1,2]


  Constraints:
  ------------------------
    * 1 <= n <= 500
    * nums.length == 2n
    * 1 <= nums[i] <= 10^3

*/

// first attempt
function shuffle(nums: number[], n: number): number[] {
  const results = []

  for (let i = 0; i < n; i++) {
    results.push(nums[i], nums[n + i])
  }

  return results
}

console.time('attempt 1')
console.log(shuffle([2, 5, 1, 3, 4, 7], 3))
console.timeEnd('attempt 1')
console.log()

console.time('attempt 2')
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4))
console.timeEnd('attempt 2')
console.log()

console.time('attempt 3')
console.log(shuffle([1, 1, 2, 2], 2))
console.timeEnd('attempt 3')
console.log()

// TODO: second attempt - Figure Out Shuffle In-Place
function shuffle2(nums: number[], n: number): number[] {
  return nums
}

/*

  [x1, x2, x3, x4, y1, y2, y3, y4]


*/
