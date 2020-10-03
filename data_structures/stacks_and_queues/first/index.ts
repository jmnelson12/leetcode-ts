/*

  What Is It:
    Stacks and Queues are linear data structures that have flexible sizes

    Stack: LIFO (last in first out) ex. Stack of Plates
    Queue: FIFO (first in first out) ex. Line at a Movie Theatre

  When To Use:
    Mostly useful for iterating through trees, or when you only need to manage LIFO/FIFO

  Space Complexity:
    O(n) - where n is the size of the data set

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

class LeNode {
  public data: any
  public next: LeNode

  constructor(data: any) {
    this.data = data
  }
}

class Queue {
  /* --------------------------------- FIELDS --------------------------------- */
  private head: LeNode // remove from here
  private tail: LeNode // add here

  /* --------------------------------- METHODS -------------------------------- */
  public isEmpty(): boolean {
    return !this.head
  }

  public peek(): any {
    return this.head?.data
  }

  public add(data: any): void {
    const newNode = new LeNode(data)

    if (this.tail) this.tail.next = newNode
    this.tail = newNode

    if (!this.head) this.head = newNode
  }

  public remove(): any {
    const data = this.head?.data
    this.head = this.head?.next

    if (!this.head) this.tail = null

    return data
  }
}

class Stack {
  /* --------------------------------- FIELDS --------------------------------- */
  private top: LeNode

  /* --------------------------------- METHODS -------------------------------- */
  public isEmpty(): boolean {
    return !this.top
  }

  public peek(): any {
    return this.top?.data
  }

  public push(data: any): void {
    const newNode = new LeNode(data)
    newNode.next = this.top
    this.top = newNode
  }

  public pop(): any {
    const data = this.top?.data
    this.top = this.top?.next
    return data
  }
}

console.log('\x1b[34m%s\x1b[0m', '----- Queue -----')
const myQueue = new Queue()

myQueue.add(1)
myQueue.add(2)
myQueue.add(3)

console.log(`isEmpty: ${myQueue.isEmpty()}`)
console.log(`peek: ${myQueue.peek()}`)

console.log(`\nremove: ${myQueue.remove()}`)
console.log(`peek: ${myQueue.peek()}`)
console.log(`isEmpty: ${myQueue.isEmpty()}`)

console.log(`\nremove: ${myQueue.remove()}`)
console.log(`peek: ${myQueue.peek()}`)
console.log(`isEmpty: ${myQueue.isEmpty()}`)

console.log(`\nremove: ${myQueue.remove()}`)
console.log(`peek: ${myQueue.peek()}`)
console.log(`isEmpty: ${myQueue.isEmpty()}`)

console.log('\x1b[34m%s\x1b[0m', '\n----- Stack -----')
const myStack = new Stack()

myStack.push(1)
myStack.push(2)
myStack.push(3)

console.log(`isEmpty: ${myStack.isEmpty()}`)
console.log(`peek: ${myStack.peek()}`)

console.log(`\npop: ${myStack.pop()}`)
console.log(`peek: ${myStack.peek()}`)
console.log(`isEmpty: ${myStack.isEmpty()}`)

console.log(`\npop: ${myStack.pop()}`)
console.log(`peek: ${myStack.peek()}`)
console.log(`isEmpty: ${myStack.isEmpty()}`)

console.log(`\npop: ${myStack.pop()}`)
console.log(`peek: ${myStack.peek()}`)
console.log(`isEmpty: ${myStack.isEmpty()}`)
