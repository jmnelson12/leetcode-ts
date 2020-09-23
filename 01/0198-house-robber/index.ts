// difficulty: easy
// link: https://leetcode.com/problems/house-robber/

/*
  Example 1:
  ------------------------
  Input: nums = [1,2,3,1]
  Output: 4
  Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
              Total amount you can rob = 1 + 3 = 4.

  Example 2:
  ------------------------
  Input: nums = [2,7,9,3,1]
  Output: 12
  Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
              Total amount you can rob = 2 + 9 + 1 = 12.


  Constraints:
  ------------------------
    * 0 <= nums.length <= 100
    * 0 <= nums[i] <= 400

*/

function rob(nums: number[]): number {
  if (nums.length === 0) return 0

  /*

    i = 0
    ----------
    temp = 0
    prev1 = 1
    prev2 = 0

    #################

    i = 1
    ----------
    temp = 1
    prev1 = 2
    prev2 = 1

    #################

    i = 2
    ----------
    temp = 2
    prev1 = 4
    prev2 = 2

    #################

    i = 3
    ----------
    temp = 4
    prev1 = 4
    prev2 = 4

    -- end of loop

    return prev1
  */

  let prev1 = 0
  let prev2 = 0

  for (let i = 0; i < nums.length; i++) {
    let temp = prev1
    prev1 = Math.max(prev2 + nums[i], prev1)
    prev2 = temp
  }

  return prev1
}

// w/ memoization
function robWMemo(nums: number[]): number {
  if (nums.length === 0) return 0

  const memo = new Array(nums.length + 1)
  memo[0] = 0
  memo[1] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    memo[i + 1] = Math.max(memo[i], memo[i - 1] + nums[i])
  }

  return memo[nums.length]
}

console.time('runtime')
console.log(rob([1, 2, 3, 1]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(rob([2, 7, 9, 3, 1]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(robWMemo([1, 2, 3, 1]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(robWMemo([2, 7, 9, 3, 1]))
console.timeEnd('runtime')
console.log()
