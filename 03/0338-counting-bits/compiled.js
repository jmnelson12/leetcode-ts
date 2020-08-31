function countBits(num) {
    if (num === 0)
        return [0];
    if (num === 1)
        return [0, 1];
    var results = [0, 1, 1];
    for (var i = 3; i <= num; i++) {
        var binaryString = (i >>> 0).toString(2);
        results[i] = (binaryString.match(/1/g) || []).length;
    }
    return results;
}
console.time('runtime');
console.log(countBits(2));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(countBits(5));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(countBits(100));
console.timeEnd('runtime');
console.log();
