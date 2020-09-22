// difficulty: easy
// link: https://leetcode.com/problems/min-stack/

/*
  Example 1:
  ------------------------
  Input
  ["MinStack","push","push","push","getMin","pop","top","getMin"]
  [[],[-2],[0],[-3],[],[],[],[]]

  Output
  [null,null,null,null,-3,null,0,-2]

  Explanation
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  minStack.getMin(); // return -3
  minStack.pop();
  minStack.top();    // return 0
  minStack.getMin(); // return -2

  Constraints:
  ------------------------
    * Methods pop, top and getMin operations will always be called on non-empty stacks.

*/

class MinStack {
  private stack: { val: number; min: number }[]

  constructor() {
    this.stack = []
  }

  push(x: number): void {
    this.stack.push({
      val: x,
      min: this.stack.length ? Math.min(x, this.getMin()) : x,
    })
  }

  pop(): void {
    this.stack.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1].val
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].min
  }
}

const minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)

console.time('runtime')
console.log(minStack.getMin())
console.timeEnd('runtime')
console.log()

minStack.pop()

console.time('runtime')
console.log(minStack.top())
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(minStack.getMin())
console.timeEnd('runtime')
console.log()
