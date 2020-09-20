var symbolMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};
function romanToInt(s) {
    var total = 0;
    for (var i = 0; i < s.length; i++) {
        var currentSymbol = s.charAt(i);
        var nextSymbol = s.charAt(i + 1);
        if (symbolMap[currentSymbol] < symbolMap[nextSymbol]) {
            total -= symbolMap[currentSymbol];
        }
        else {
            total += symbolMap[currentSymbol];
        }
    }
    return total;
}
console.time('runtime');
console.log(romanToInt('III'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(romanToInt('IV'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(romanToInt('IX'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(romanToInt('LVIII'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(romanToInt('MCMXCIV'));
console.timeEnd('runtime');
console.log();
