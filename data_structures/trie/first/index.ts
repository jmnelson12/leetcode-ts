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
  public end: boolean

  constructor() {
    this.keys = new Map()
    this.end = false
  }

  /* ---------------------------- GETTERS & SETTERS --------------------------- */
  set setEnd(value: boolean) {
    this.end = value
  }
  get getEnd() {
    return this.end
  }

  /* --------------------------------- METHODS -------------------------------- */
}

class Trie {
  /* --------------------------------- FIELDS --------------------------------- */
  public root: TrieNode

  constructor() {
    this.root = new TrieNode()
  }

  /* --------------------------------- METHODS -------------------------------- */
  public add(input: string, node = this.root) {
    // add string to trie
    if (!input.length) {
      node.setEnd = true
      return
    }

    if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new TrieNode())
      return this.add(input.substring(1), node.keys.get(input[0]))
    }

    return this.add(input.substring(1), node.keys.get(input[0]))
  }

  public isWord(word: string) {
    let node = this.root

    while (word.length > 1) {
      if (!node.keys.has(word[0])) return false

      node = node.keys.get(word[0])
      word = word.substring(1)
    }

    return node.keys.has(word) && node.keys.get(word).getEnd
  }

  private appendStrToArr(node: TrieNode, str: string, words: string[]) {
    if (node.keys.size !== 0) {
      for (let letter of node.keys.keys()) {
        this.appendStrToArr(node.keys.get(letter), str.concat(letter), words)
      }
      if (node.getEnd) {
        words.push(str)
      }
    } else {
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
