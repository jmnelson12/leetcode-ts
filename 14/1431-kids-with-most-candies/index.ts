// difficulty: easy
// link: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

/*
  Example 1:
  ------------------------
  Input: candies = [2,3,5,1,3], extraCandies = 3
  Output: [true,true,true,false,true]
  Explanation:
    Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.
    Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
    Kid 3 has 5 candies and this is already the greatest number of candies among the kids.
    Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.
    Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.

  Example 2:
  ------------------------
  Input: candies = [4,2,1,1,2], extraCandies = 1
  Output: [true,false,false,false,false]
  Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.

  Example 3:
  ------------------------
  Input: candies = [12,1,12], extraCandies = 10
  Output: [true,false,true]

  Constraints:
  ------------------------
  * 2 <= candies.length <= 100
  * 1 <= candies[i] <= 100
  * 1 <= extraCandies <= 50

*/

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let max = candies[0]
  for (let i = 1; i < candies.length; i++) {
    if (candies[i] > max) max = candies[i]
  }

  const results = []
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) results.push(true)
    else results.push(false)
  }

  return results
}

console.time('attempt 1')
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))
console.timeEnd('attempt 1')
console.log()

console.time('attempt 2')
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1))
console.timeEnd('attempt 2')
console.log()

console.time('attempt 3')
console.log(kidsWithCandies([12, 1, 12], 10))
console.timeEnd('attempt 3')
console.log()
