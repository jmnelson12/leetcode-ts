function isHappy(n) {
    var hashSet = new Set();
    while (n !== 1 && !hashSet.has(n)) {
        hashSet.add(n);
        var temp = 0;
        while (n > 0) {
            temp += Math.pow(n % 10, 2);
            n = Math.floor(n / 10);
        }
        n = temp;
    }
    return n === 1;
}
console.time('runtime');
console.log(isHappy(19));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(isHappy(7));
console.timeEnd('runtime');
console.log();
