function moveZeroes(numbers) {
    for (var i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] === 0) {
            numbers.splice(i, 1);
            numbers.push(0);
        }
    }
}
var test1Array = [0, 1, 0, 3, 12];
console.time('runtime');
moveZeroes(test1Array);
console.log(test1Array);
console.timeEnd('runtime');
console.log();
