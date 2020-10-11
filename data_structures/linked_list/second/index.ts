/*

  What Is It:
    linked list is a data structure that contains a head. The nodes contain data and a reference to the next node in the list

  When To Use:
    - need dynamically sized dataset
    - don't need random access to data

  Space Complexity:
    O(n)

  Time Complexity:
    Access:
      Avg: O(n)
      Worst: O(n)

    Search:
      Avg: O(n)
      Worst: O(n)

    Insert:
      Avg: O(1)
      Worst: O(1)

    Delete:
      Avg: O(1)
      Worst: O(1)

*/

class LinkedListNode {
  public data: any
  public next?: LinkedListNode

  constructor(data: any, next?: LinkedListNode) {
    this.data = data
    if (next) this.next = next
  }
}

class LinkedList {
  private head?: LinkedListNode

  /* --------------------------- GETTERS AND SETTERS -------------------------- */
  get top() {
    return this.head
  }

  /* --------------------------------- METHODS -------------------------------- */
  public append(data: number) {
    const newNode = new LinkedListNode(data)

    if (!this.head) {
      this.head = newNode
      return
    }

    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = newNode
  }
  public prepend(data: number) {
    const newNode = new LinkedListNode(data)
    newNode.next = this.head
    this.head = newNode
  }
  public contains(data: number) {
    if (!this.head) return false

    let current = this.head
    while (current) {
      if (current.data === data) return true
      current = current.next
    }

    return false
  }
  public delete(data: number) {
    if (!this.head) return
    if (this.head.data === data) {
      this.head = this.head.next
    }

    let current = this.head
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next
        break
      }
      current = current.next
    }
  }
}

const LL = new LinkedList()
LL.prepend(1)
LL.append(2)
LL.append(3)
LL.append(4)
LL.append(5)
LL.prepend(0)
console.log(LL.contains(2))
LL.delete(2)
console.log(LL.contains(2))

console.log(JSON.stringify(LL.top))
