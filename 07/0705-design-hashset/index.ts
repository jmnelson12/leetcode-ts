// difficulty: easy
// link: https://leetcode.com/problems/design-hashset/

/*
  Example 1:
  ------------------------

  MyHashSet hashSet = new MyHashSet();
  hashSet.add(1);
  hashSet.add(2);
  hashSet.contains(1);    // returns true
  hashSet.contains(3);    // returns false (not found)
  hashSet.add(2);
  hashSet.contains(2);    // returns true
  hashSet.remove(2);
  hashSet.contains(2);    // returns false (already removed)

*/

class MyHashSet {
  private hashSet: { [key: number]: boolean }

  constructor() {
    this.hashSet = {}
  }

  add(key: number): void {
    this.hashSet[key] = true
  }

  remove(key: number): void {
    delete this.hashSet[key]
  }

  contains(key: number): boolean {
    return this.hashSet.hasOwnProperty(key)
  }
}

const hashSet = new MyHashSet()
hashSet.add(1)
hashSet.add(2)
console.log(hashSet.contains(1)) // returns true
console.log(hashSet.contains(3)) // returns false (not found)
hashSet.add(2)
console.log(hashSet.contains(2)) // returns true
hashSet.remove(2)
console.log(hashSet.contains(2)) // returns false (already removed)
