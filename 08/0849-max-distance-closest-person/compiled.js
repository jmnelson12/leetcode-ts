function maxDistToClosest(seats) {
    var maxDistance = 0;
    var p1Index = -1;
    for (var i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
            maxDistance =
                p1Index < 0 ? i : Math.max(maxDistance, Math.floor((i - p1Index) / 2));
            p1Index = i;
        }
    }
    maxDistance = Math.max(maxDistance, seats.length - p1Index - 1);
    return maxDistance;
}
console.time('runtime');
console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(maxDistToClosest([1, 0, 0, 0]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(maxDistToClosest([0, 1]));
console.timeEnd('runtime');
console.log();
