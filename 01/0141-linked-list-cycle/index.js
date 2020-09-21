// difficulty: easy
// link: https://leetcode.com/problems/linked-list-cycle/

/*
  Example 1:
  ------------------------
  Input: head = [3,2,0,-4], pos = 1
  Output: true
  Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

  Example 2:
  ------------------------
  Input: head = [1,2], pos = 0
  Output: true
  Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

  Example 3:
  ------------------------
  Input: head = [1], pos = -1
  Output: false
  Explanation: There is no cycle in the linked list.

  Constraints:
  ------------------------
    * The number of the nodes in the list is in the range [0, 104].
    * -105 <= Node.val <= 105
    * pos is -1 or a valid index in the linked-list.

*/

var hasCycle = function (head) {
  let fast = head
  let slow = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast === slow) return true
  }

  return false
}
