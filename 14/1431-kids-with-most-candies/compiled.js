function kidsWithCandies(candies, extraCandies) {
    var max = candies[0];
    for (var i = 1; i < candies.length; i++) {
        if (candies[i] > max)
            max = candies[i];
    }
    var results = [];
    for (var i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max)
            results.push(true);
        else
            results.push(false);
    }
    return results;
}
console.time('runtime');
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(kidsWithCandies([12, 1, 12], 10));
console.timeEnd('runtime');
console.log();
