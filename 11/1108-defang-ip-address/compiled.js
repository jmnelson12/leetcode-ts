function defangIPaddr(address) {
    return address.replace(/[.]/g, '[.]');
}
console.time('attempt 1');
console.log(defangIPaddr('1.1.1.1'));
console.timeEnd('attempt 1');
console.log();
console.time('attempt 2');
console.log(defangIPaddr('255.100.50.0'));
console.timeEnd('attempt 2');
console.log();
