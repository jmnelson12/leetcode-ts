// difficulty: medium
// link: https://leetcode.com/problems/swap-nodes-in-pairs/

/*
  Example 1:
  ------------------------
  Given 1->2->3->4, you should return the list as 2->1->4->3.
*/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) return null
  if (!head.next) return head

  const nextNode = head.next
  head.next = swapPairs(head.next.next)
  nextNode.next = head

  return nextNode
}
