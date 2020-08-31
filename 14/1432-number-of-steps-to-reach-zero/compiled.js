function numberOfSteps(num) {
    var steps = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num /= 2;
        }
        else {
            num--;
        }
        steps++;
    }
    return steps;
}
console.time('runtime');
console.log(numberOfSteps(14));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(numberOfSteps(8));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(numberOfSteps(1000000));
console.timeEnd('runtime');
console.log();
