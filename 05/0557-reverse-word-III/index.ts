// difficulty: easy
// link: https://leetcode.com/problems/reverse-words-in-a-string-iii/

/*
  Example 1:
  ------------------------
  Input: "Let's take LeetCode contest"
  Output: "s'teL ekat edoCteeL tsetnoc"

  Constraints:
  ------------------------
    * In the string, each word is separated by single space and there will not be any extra space in the string.

*/

// fastest
function reverseWords1(s: string): string {
  return s
    .split(' ')
    .map((str) => str.split('').reverse().join(''))
    .join(' ')
}

// third fastest
function reverseWords2(s: string): string {
  let returnStr = ''

  for (let i = 0; i < s.length; i++) {
    let wordLength = 0

    // get size of word we want to reverse
    for (let j = i; j < s.length; j++) {
      if (s.charAt(j) === ' ') break
      wordLength += 1
    }

    for (let y = i + wordLength - 1; y >= i; y--) {
      returnStr += s.charAt(y)
    }

    if (i + wordLength !== s.length) returnStr += ' '

    i = i + wordLength
  }

  return returnStr
}

// second fastest
function reverseWords3(s: string): string {
  let result = ''
  let currentWord = ''

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === ' ') {
      result += currentWord + ' '
      currentWord = ''
    } else {
      currentWord = s.charAt(i) + currentWord
    }
  }

  return result + currentWord
}

console.time('runtime')
console.log(reverseWords1("Let's take LeetCode contest"))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(reverseWords2("Let's take LeetCode contest"))
console.timeEnd('runtime')
console.log()

console.time('runtime')
console.log(reverseWords3("Let's take LeetCode contest"))
console.timeEnd('runtime')
console.log()
