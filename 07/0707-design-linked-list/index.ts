class LinkedListNode {
  public val: number
  public next: LinkedListNode | null

  constructor(val: number, next: LinkedListNode | null = null) {
    this.val = val
    this.next = next
  }
}

class MyLinkedList {
  private head: LinkedListNode | null
  private tail: LinkedListNode | null
  private size: number

  constructor(head = null) {
    this.head = head
    this.tail = null
    this.size = 0
  }

  get(index: number): number {
    // If the index is invalid, return -1
    if (index >= this.size || index < 0) return -1

    // Get the value of the index-th node in the linked list.
    let currentIndex = 0
    let currentNode: LinkedListNode | null = this.head

    while (currentNode) {
      if (currentIndex === index) return currentNode.val

      currentNode = currentNode?.next
      currentIndex++
    }

    return -1
  }

  addAtHead(val: number): void {
    // Add a node of value val before the first element of the linked list.
    const newNode = new LinkedListNode(val)

    // After the insertion, the new node will be the first node of the linked list.
    if (this.head) {
      newNode.next = this.head
      this.head = newNode
    } else {
      this.head = newNode
      this.tail = this.head
    }
    this.size++
  }

  addAtTail(val: number): void {
    // Append a node of value val to the last element of the linked list.
    const newNode = new LinkedListNode(val)

    if (this.tail) {
      this.tail.next = newNode
    } else {
      this.head = newNode
    }
    this.tail = newNode
    this.size++
  }

  addAtIndex(index: number, val: number): void {
    // If index is greater than the length, the node will not be inserted.
    if (index > this.size || index < 0) return
    if (index === this.size) {
      // If index equals to the length of linked list, the node will be appended to the end of linked list.
      this.addAtTail(val)
      return
    }
    if (index === 0) {
      // If index equals to the length of linked list, the node will be appended to the end of linked list.
      this.addAtHead(val)
      return
    }

    // Add a node of value val before the index-th node in the linked list.
    let prevNode: LinkedListNode | null = null
    let currNode = this.head

    while (index && currNode) {
      prevNode = currNode
      currNode = currNode?.next
      index--
    }

    if (prevNode) prevNode.next = new LinkedListNode(val, currNode)

    this.size++
  }

  deleteAtIndex(index: number): void {
    //Delete the index-th node in the linked list, if the index is valid.
    if (index >= this.size || index < 0) return
    if (index === 0) {
      this.head = this.head?.next || null
      this.size--

      if (this.size === 0) this.tail = null
      return
    }

    let prevNode: any = null
    let currNode: any = this.head

    while (index && currNode) {
      prevNode = currNode
      currNode = currNode?.next
      index--
    }

    if (prevNode) {
      prevNode.next = currNode?.next
    } else {
      this.head = currNode?.next
    }

    this.size--
  }
}

// const linkedList = new MyLinkedList() // Initialize empty LinkedList
// linkedList.addAtHead(1)
// linkedList.addAtTail(3)
// linkedList.addAtIndex(1, 2) // linked list becomes 1->2->3
// console.log(linkedList.get(1)) // returns 2
// linkedList.deleteAtIndex(1) // now the linked list is 1->3
// console.log(linkedList.get(1)) // returns 3

// const linkedList2 = new MyLinkedList() // Initialize empty LinkedList
// linkedList2.addAtHead(7)
// linkedList2.addAtHead(2)
// linkedList2.addAtHead(1)
// linkedList2.addAtIndex(3, 0)
// linkedList2.deleteAtIndex(2)
// linkedList2.addAtHead(6)
// linkedList2.addAtTail(4)
// console.log(linkedList2.get(4))
// linkedList2.addAtHead(4)
// linkedList2.addAtIndex(5, 0)
// linkedList2.addAtHead(6)

const linkedList3 = new MyLinkedList()
linkedList3.addAtIndex(0, 10)
linkedList3.addAtIndex(0, 20)
linkedList3.addAtIndex(1, 30)
console.log(JSON.stringify(linkedList3))
