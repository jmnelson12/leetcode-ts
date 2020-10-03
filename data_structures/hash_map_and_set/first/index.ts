/*

  What Is It:
    - Hash Set is a data structure of unique keys
    - Hash Map is a data structure that contains key-value pairs

  When To Use:
    Hash Set:
      - When you want unique values
    Hash Map:
      - When you want more info than just a key


  Space Complexity:
    O(n) for both - where n is the number of keys or key value pairs

  Time Complexity:
    Access:
      Avg: O(1)
      Worst: O(1)

    Search:
      Avg:  O(n)
      Worst: O(n)

    Insert:
      Avg: O(1)
      Worst: O(1)

    Delete:
      Avg: O(1)
      Worst: O(1)

*/

class HashSet {
  /* --------------------------------- FIELDS --------------------------------- */
  private set: { [key: string]: boolean }

  constructor() {
    this.set = {}
  }
  /* --------------------------- GETTERS AND SETTERS -------------------------- */
  get leObj() {
    return this.set
  }

  /* --------------------------------- METHODS -------------------------------- */
  public add(key: string): void {
    this.set[key] = true
  }

  public contains(key: string): boolean {
    return this.set.hasOwnProperty(key)
  }

  public remove(key: string) {
    delete this.set[key]
  }
}

class HashMap {
  /* --------------------------------- FIELDS --------------------------------- */
  private map: { [key: string]: any }

  constructor() {
    this.map = {}
  }

  /* --------------------------- GETTERS AND SETTERS -------------------------- */
  get leObj() {
    return this.map
  }

  /* --------------------------------- METHODS -------------------------------- */
  public put(key: string, value: any): void {
    this.map[key] = value
  }

  public get(key: string): any {
    return this.map[key]
  }

  public remove(key: string): void {
    delete this.map[key]
  }
}

console.log('My Hash Set Example\n')
const mySet = new HashSet()
mySet.add('foo')
mySet.add('baz')
mySet.add('larry')
mySet.add('moe')
mySet.add('curly')

console.log(mySet.contains('foo'))
console.log(mySet.contains('jazz'))
console.log(mySet.contains('harry'))

mySet.remove('larry')
mySet.remove('joe')
mySet.remove('foo')

console.log(JSON.stringify(mySet.leObj))

console.log('\nMy Hash map Example\n')
const myMap = new HashMap()
myMap.put('foo', 1)
myMap.put('baz', 42)
myMap.put('larry', 12)
myMap.put('moe', 1152)
myMap.put('curly', 151)

console.log(myMap.get('foo'))
console.log(myMap.get('jazz'))
console.log(myMap.get('larry'))

console.log(JSON.stringify(myMap.leObj))
