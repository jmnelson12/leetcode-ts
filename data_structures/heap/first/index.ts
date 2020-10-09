/*

  What Is It:
    - It is an array that can be visualized as a `nearly complete` binary tree

  When To Use:
    -Good for PriorityQueues and sorting

  Space Complexity:
    O(n)

  Time Complexity:
    Access:
      Avg: O(log n)
      Worst: O(log n)

    Search:
      Avg: O(log n)
      Worst: O(log n)

    Insert:
      Avg: O(log n)
      Worst: O(log n)

    Delete:
      Avg: O(1)
      Worst: O(1)

*/

class MinHeap {
  /* --------------------------------- FIELDS --------------------------------- */
  private capacity = 10
  private size = 0

  private items: number[] = new Array<number>(this.capacity)

  /* --------------------------------- METHODS -------------------------------- */
  private getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1
  }
  private getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2
  }
  private getParentIndex(childIndex: number): number {
    return (childIndex - 1) / 2
  }

  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.size
  }
  private hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.size
  }
  private hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0
  }

  private leftChild(index: number): number {
    return this.items[this.getLeftChildIndex(index)]
  }
  private rightChild(index: number): number {
    return this.items[this.getRightChildIndex(index)]
  }
  private parent(index: number): number {
    return this.items[this.getParentIndex(index)]
  }

  private swap(i: number, j: number): void {
    const temp = this.items[i]
    this.items[i] = this.items[j]
    this.items[j] = temp
  }
  private ensureExtraCapacity() {
    if (this.size === this.capacity) {
      this.items = this.items.concat(new Array(this.capacity))
      this.capacity *= 2
    }
  }

  /** return the value of the current root */
  public peek() {
    if (!this.size) throw new Error()
    return this.items[0]
  }

  /** return the value of the current root and remove it */
  public poll() {
    if (!this.size) throw new Error()

    const item = this.items[0]
    this.items[0] = this.items[this.size - 1]

    this.size--
    this.heapifyDown()

    return item
  }

  public add(item: number) {
    this.ensureExtraCapacity()
    this.items[this.size] = item
    this.size++

    this.heapifyUp()
  }

  public printHeap() {
    console.log(JSON.stringify(this.items))
  }

  public heapifyUp() {
    let index = this.size - 1
    while (this.hasParent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.getParentIndex(index), index)
      index = this.getParentIndex(index)
    }
  }
  public heapifyDown() {
    let index = 0
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index)
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index)
      }

      if (this.items[index] < this.items[smallerChildIndex]) break

      this.swap(index, smallerChildIndex)
      index = smallerChildIndex
    }
  }
}

const myMinHeap = new MinHeap()
myMinHeap.add(10)
myMinHeap.add(15)
myMinHeap.add(20)
myMinHeap.add(17)
myMinHeap.add(25)

console.log(myMinHeap.peek())
console.log(myMinHeap.poll())
myMinHeap.printHeap()

console.log('--------')

console.log(myMinHeap.peek())
console.log(myMinHeap.poll())
myMinHeap.printHeap()

console.log('--------')
console.log(myMinHeap.peek())
console.log(myMinHeap.poll())
myMinHeap.printHeap()

console.log('--------')
console.log(myMinHeap.peek())
console.log(myMinHeap.poll())
myMinHeap.printHeap()

console.log('--------')
console.log(myMinHeap.peek())
console.log(myMinHeap.poll())
myMinHeap.printHeap()

// console.log('--------')
// console.log(myMinHeap.peek()) // should throw error
// console.log(myMinHeap.poll())
