// difficulty: easy
// link: https://leetcode.com/problems/design-hashmap/

/*
  Example 1:
  ------------------------
  MyHashMap hashMap = new MyHashMap();
  hashMap.put(1, 1);
  hashMap.put(2, 2);
  hashMap.get(1);            // returns 1
  hashMap.get(3);            // returns -1 (not found)
  hashMap.put(2, 1);          // update the existing value
  hashMap.get(2);            // returns 1
  hashMap.remove(2);          // remove the mapping for 2
  hashMap.get(2);            // returns -1 (not found)

*/

class MyHashMap {
  private hashMap: { [key: number]: number }

  constructor() {
    this.hashMap = {}
  }

  put(key: number, value: number): void {
    this.hashMap[key] = value
  }

  get(key: number): number {
    return this.hashMap.hasOwnProperty(key) ? this.hashMap[key] : -1
  }

  remove(key: number): void {
    delete this.hashMap[key]
  }
}

const hashMap = new MyHashMap()
hashMap.put(1, 1)
hashMap.put(2, 2)
console.log(hashMap.get(1)) // returns 1
console.log(hashMap.get(3)) // returns -1 (not found)
hashMap.put(2, 1) // update the existing value
console.log(hashMap.get(2)) // returns 1
hashMap.remove(2) // remove the mapping for 2
console.log(hashMap.get(2)) // returns -1 (not found)
