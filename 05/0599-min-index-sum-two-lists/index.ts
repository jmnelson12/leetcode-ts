// difficulty: easy
// link: https://leetcode.com/problems/minimum-index-sum-of-two-lists

/*
  Example 1:
  ------------------------
  Input:
  ["Shogun", "Tapioca Express", "Burger King", "KFC"]
  ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
  Output: ["Shogun"]
  Explanation: The only restaurant they both like is "Shogun".


  Example 2:
  ------------------------
  Input:
  ["Shogun", "Tapioca Express", "Burger King", "KFC"]
  ["KFC", "Shogun", "Burger King"]
  Output: ["Shogun"]
  Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).

  Constraints:
  ------------------------
    * The length of both lists will be in the range of [1, 1000].
    * The length of strings in both lists will be in the range of [1, 30].
    * The index is starting from 0 to the list length minus 1.
    * No duplicates in both lists.

*/

function findRestaurant(list1: string[], list2: string[]): string[] {
  // key: sum of index's
  // value: list of places
  const hashMap: { [key: number]: string[] } = {}

  for (let i = 0; i < list1.length; i++) {
    const list2Index = list2.indexOf(list1[i])
    const iSum = i + list2Index

    if (list2Index !== -1) {
      if (!hashMap.hasOwnProperty(iSum)) {
        hashMap[iSum] = [list1[i]]
      } else {
        hashMap[iSum].push(list1[i])
      }
    }
  }

  for (let i = 0; i < list1.length + list2.length; i++) {
    if (hashMap.hasOwnProperty(i)) {
      return hashMap[i]
    }
  }

  return []
}

console.time('runtime')
console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    [
      'Piatti',
      'The Grill at Torrey Pines',
      'Hungry Hunter Steakhouse',
      'Shogun',
    ]
  )
)
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['KFC', 'Shogun', 'Burger King']
  )
)
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(
  findRestaurant(
    ['Shogun', 'KFC', 'Burger King', 'The Grill'],
    ['KFC', 'Shogun', 'Burger King']
  )
)
console.timeEnd('runtime')
console.log()
