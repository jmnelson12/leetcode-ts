// difficulty: medium
// link: https://leetcode.com/problems/maximize-distance-to-closest-person/

/*
  Example 1:
  ------------------------
  Input: seats = [1,0,0,0,1,0,1]
  Output: 2
  Explanation:
  If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
  If Alex sits in any other open seat, the closest person has distance 1.
  Thus, the maximum distance to the closest person is 2.

  Example 2:
  ------------------------
  Input: seats = [1,0,0,0]
  Output: 3
  Explanation:
  If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
  This is the maximum distance possible, so the answer is 3.

  Example 3:
  ------------------------
  Input: seats = [0,1]
  Output: 1

  Constraints:
  ------------------------
    * 2 <= seats.length <= 2 * 104
    * seats[i] is 0 or 1.
    * At least one seat is empty.
    * At least one seat is occupied.

*/

function maxDistToClosest(seats: number[]): number {
  let maxDistance = 0
  let p1Index = -1

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      maxDistance =
        p1Index < 0 ? i : Math.max(maxDistance, Math.floor((i - p1Index) / 2))
      p1Index = i
    }
  }

  maxDistance = Math.max(maxDistance, seats.length - p1Index - 1)

  return maxDistance
}

console.time('runtime')
console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(maxDistToClosest([1, 0, 0, 0]))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(maxDistToClosest([0, 1]))
console.timeEnd('runtime')
console.log()
