// difficulty: easy
// link: https://leetcode.com/problems/intersection-of-two-linked-lists/

/*
  Example 1:
  ------------------------
  Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
  Output: Reference of the node with value = 8
  Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

  Example 2:
  ------------------------
  Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
  Output: Reference of the node with value = 2
  Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

  Example 3:
  ------------------------
  Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
  Output: null
  Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
  Explanation: The two lists do not intersect, so return null.

  Constraints:
  ------------------------
    * If the two linked lists have no intersection at all, return null.
    * The linked lists must retain their original structure after the function returns.
    * You may assume there are no cycles anywhere in the entire linked structure.
    * Each value on each linked list is in the range [1, 10^9].
    * Your code should preferably run in O(n) time and use only O(1) memory.

*/
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const getIntersectionNode = function (
  headA: ListNode | null,
  headB: ListNode | null
) {
  let list1 = headA
  let list2 = headB

  while (list1 != list2) {
    list1 = !list1 ? headB : list1.next
    list2 = !list2 ? headA : list2.next
  }

  return list1
}

// Example 1 Inputs
const ex1Intersection = new ListNode(8, new ListNode(4, new ListNode(5)))
const ex1A = new ListNode(4, new ListNode(1, ex1Intersection))
const ex1B = new ListNode(5, new ListNode(6, new ListNode(1, ex1Intersection)))

// Example 2 Inputs
const ex2Intersection = new ListNode(2, new ListNode(4))
const ex2A = new ListNode(1, new ListNode(9, new ListNode(1, ex2Intersection)))
const ex2B = new ListNode(3, ex2Intersection)

// Example 3 Inputs
const ex3A = new ListNode(1, new ListNode(6, new ListNode(4)))
const ex3B = new ListNode(1, new ListNode(5))

console.time('runtime')
console.log(JSON.stringify(getIntersectionNode(ex1A, ex1B)))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(JSON.stringify(getIntersectionNode(ex2A, ex2B)))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(JSON.stringify(getIntersectionNode(ex3A, ex3B)))
console.timeEnd('runtime')
console.log()
