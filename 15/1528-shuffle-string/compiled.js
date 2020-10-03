function restoreString(s, indices) {
    var result = '';
    for (var i = 0; i < indices.length; i++) {
        result += s.charAt(indices.indexOf(i));
    }
    return result;
}
console.time('runtime');
console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(restoreString('abc', [0, 1, 2]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(restoreString('aaiougrt', [4, 0, 2, 6, 7, 3, 1, 5]));
console.timeEnd('runtime');
console.log();
