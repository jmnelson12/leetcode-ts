function canPlaceFlowers(flowerbed, n) {
    var totalPlaced = 0;
    for (var i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] !== 1 && !flowerbed[i - 1] && !flowerbed[i + 1]) {
            totalPlaced++;
            flowerbed[i] = 1;
        }
        if (totalPlaced >= n)
            return true;
    }
    return false;
}
console.time('runtime');
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(canPlaceFlowers([0, 0, 1, 0, 0, 0, 1], 2));
console.timeEnd('runtime');
console.log();
