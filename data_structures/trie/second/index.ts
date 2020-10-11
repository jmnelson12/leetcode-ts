/*

  What Is It:
    A trie is a tree-like data structure wherein the nodes of the tree
    store the entire alphabet, and strings/words can be retrieved by traversing
    down a branch path of the tree

  When To Use:
    Use a trie when you want to take a partial value and return a set of possible
    complete values. Classic example is auto complete

  Space Complexity:
    O (n * m)

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

class TrieNode {
  /* --------------------------------- FIELDS --------------------------------- */
  public keys: Map<string, TrieNode>
  private _end: boolean

  constructor() {
    this.keys = new Map()
    this._end = false
  }

  /* ---------------------------- GETTERS & SETTERS --------------------------- */
  set end(value: boolean) {
    this._end = value
  }
  get end() {
    return this._end
  }
}

class Trie {
  private root: TrieNode

  constructor() {
    this.root = new TrieNode()
  }

  public add(str: string, node = this.root) {
    // no more string left? set node as end and return
    if (!str.length) {
      node.end = true
      return
    }

    const firstChar = str[0]
    // if char not in Map, add it
    if (!node.keys.has(firstChar)) {
      node.keys.set(firstChar, new TrieNode())
    }

    // go to the next char in the string
    // 'abcd' => 'bcd'
    return this.add(str.substr(1), node.keys.get(firstChar))
  }
  public isWord(str: string) {
    let node = this.root

    while (str.length > 1) {
      const firstChar = str[0]
      // if char not in Map
      if (!node.keys.has(firstChar)) return false

      // go to the next node that had the char
      node = node.keys.get(firstChar)
      // go to next char
      str = str.substr(1)
    }

    // is letter in Map and are we at the end of the word
    return node.keys.has(str) && node.keys.get(str).end
  }

  private appendStrToArr(node: TrieNode, str: string, words: string[]) {
    // if there are characters in the Trie,
    // loop through leters and append them
    if (node.keys.size !== 0) {
      for (let char of node.keys.keys()) {
        this.appendStrToArr(node.keys.get(char), str.concat(char), words)
      }

      // if this is the end node, push str to word
      if (node.end) {
        words.push(str)
      }
    } else {
      // otherwise add str to words if it exists
      str.length > 0 && words.push(str)
      return
    }
  }
  public print() {
    // print all the words in the trie
    const words: string[] = []
    this.appendStrToArr(this.root, '', words)
    return words
  }
}

const myTrie = new Trie()
myTrie.add('ball')
myTrie.add('bat')
myTrie.add('batter')
myTrie.add('doll')
myTrie.add('dork')
myTrie.add('do')
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')

console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('dor'))
console.log(myTrie.isWord('dorf'))
console.log(myTrie.isWord('batte'))
console.log(myTrie.print())
