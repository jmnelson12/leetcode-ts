// difficulty: easy
// link: https://leetcode.com/problems/merge-two-sorted-lists/

/*
  Example 1:
  ------------------------
  Input: 1->2->4, 1->3->4
  Output: 1->1->2->3->4->4

*/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) return l2
  if (!l2) return l1

  const newList = new ListNode(0)
  let current = newList

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      // push current l1 node
      current.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      // push current l2 node
      current.next = new ListNode(l2.val)
      l2 = l2.next
    }
    current = current.next
  }

  // add rest to end of newList
  if (l1) {
    current.next = l1
  }
  if (l2) {
    current.next = l2
  }

  return newList.next
}

const l1 = new ListNode(1, new ListNode(2, new ListNode(4)))
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)))

console.time('runtime')
console.log(JSON.stringify(mergeTwoLists(l1, l2)))
console.timeEnd('runtime')
console.log()
