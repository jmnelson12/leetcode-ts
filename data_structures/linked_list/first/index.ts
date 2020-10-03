/*

  What Is It:
    A linked list is a data structure of nodes that contains a value and a pointer to the next node in the list

  When To Use:
    - Don't know the size of the dataset
    - Want to use something like a priority queue
    - O(1) insertions and deletions
    - Don't need random access

  Space Complexity:
    O(n) - where n is the number of nodes

  Time Complexity:
    Access:
      Avg:  O(n)
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

class LinkedListNode<T> {
  public data: any
  public next?: LinkedListNode<T>

  constructor(data: T) {
    this.data = data
  }
}

class LinkedList<T = number> {
  /* --------------------------------- FIELDS --------------------------------- */
  private head: LinkedListNode<T> | null
  private size: number

  constructor() {
    this.head = null
    this.size = 0
  }

  /* --------------------------- GETTERS AND SETTERS -------------------------- */
  get length() {
    return this.size
  }

  get top() {
    return this.head
  }

  /* --------------------------------- METHODS -------------------------------- */
  public append(data: T): void {
    const newNode = new LinkedListNode(data)

    if (!this.head) {
      this.head = newNode
      return
    }

    let current = this.head
    // get to the last node in the linked list
    while (current.next) {
      current = current.next
    }

    // set the last nodes next value to the new node
    current.next = newNode

    this.size++
  }

  public prepend(data: T): void {
    const newNode = new LinkedListNode(data)

    // we want the head to be the new node
    // and the next to point to the old head
    newNode.next = this.head
    this.head = newNode

    this.size++
  }

  public contains(data: T): boolean {
    if (!this.head) return false

    let current = this.head
    while (current) {
      if (current.data === data) return true
      current = current.next
    }

    return false
  }

  public delete(data: T): void {
    if (!this.head) return
    if (this.head.data === data) {
      this.head = this.head.next
      return
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

const LL = new LinkedList<number>()
LL.prepend(1)
LL.append(2)
LL.prepend(0)
console.log(LL.contains(2))
LL.delete(2)
console.log(LL.contains(2))

console.log(JSON.stringify(LL.top))
