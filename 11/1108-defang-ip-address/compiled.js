function defangIPaddr(address) {
    return address.replace(/[.]/g, '[.]');
}
console.time('runtime');
console.log(defangIPaddr('1.1.1.1'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(defangIPaddr('255.100.50.0'));
console.timeEnd('runtime');
console.log();
