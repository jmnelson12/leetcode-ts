// difficulty: easy
// link: https://leetcode.com/problems/reverse-linked-list/

/*
  Example 1:
  ------------------------
  Input: 1->2->3->4->5->NULL
  Output: 5->4->3->2->1->NULL

*/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// iterative method
function reverseListIterative(head: ListNode | null): ListNode | null {
  let prev = null
  let curr = head

  while (curr !== null) {
    let next = curr.next

    curr.next = prev

    prev = curr
    curr = next
  }

  return prev
}
