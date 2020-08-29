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
console.time('attempt 1');
console.log(numberOfSteps(14));
console.timeEnd('attempt 1');
console.log();
console.time('attempt 2');
console.log(numberOfSteps(8));
console.timeEnd('attempt 2');
console.log();
console.time('attempt 3');
console.log(numberOfSteps(1000000));
console.timeEnd('attempt 3');
console.log();
