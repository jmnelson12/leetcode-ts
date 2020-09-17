function reverseStringIteratively(s) {
    var len = Math.floor(s.length / 2);
    for (var i = 0; i < len; i++) {
        var j = s.length - 1 - i;
        var temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
}
function reverseString(s) {
    helper(s, 0, s.length - 1);
}
function helper(strArr, start, end) {
    if (start >= end)
        return;
    var temp = strArr[start];
    strArr[start] = strArr[end];
    strArr[end] = temp;
    helper(strArr, start + 1, end - 1);
}
var testOne = ['h', 'e', 'l', 'l', 'o'];
var testTwo = ['H', 'a', 'n', 'n', 'a', 'h'];
console.time('runtime');
reverseStringIteratively(testOne);
console.log(testOne);
console.timeEnd('runtime');
console.log();
console.time('runtime');
reverseStringIteratively(testTwo);
console.log(testTwo);
console.timeEnd('runtime');
console.log();
console.time('runtime');
reverseString(testOne);
console.log(testOne);
console.timeEnd('runtime');
console.log();
console.time('runtime');
reverseString(testTwo);
console.log(testTwo);
console.timeEnd('runtime');
console.log();
