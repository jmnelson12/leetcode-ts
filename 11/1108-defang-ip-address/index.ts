// difficulty: easy
// link: https://leetcode.com/problems/defanging-an-ip-address/

/*
  Example 1:
  ------------------------
  Input: address = "1.1.1.1"
  Output: "1[.]1[.]1[.]1"

  Example 2:
  ------------------------
  Input: address = "255.100.50.0"
  Output: "255[.]100[.]50[.]0"


  Constraints:
  ------------------------
    * The given address is a valid IPv4 address.

*/

function defangIPaddr(address: string): string {
  return address.replace(/[.]/g, '[.]')
}

console.time('attempt 1')
console.log(defangIPaddr('1.1.1.1'))
console.timeEnd('attempt 1')
console.log()

console.time('attempt 2')
console.log(defangIPaddr('255.100.50.0'))
console.timeEnd('attempt 2')
console.log()
