function generateArrOfRandomNumbers(size, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.min, min = _c === void 0 ? 1 : _c, _d = _b.max, max = _d === void 0 ? 5000 : _d;
    var arr = new Array(size - 1);
    for (var i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min) + min);
    }
    return arr;
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var j = i;
        var y = i - 1;
        while (y >= 0 && arr[j] < arr[y]) {
            swap(arr, j, y);
            j--;
            y--;
        }
    }
    return arr;
}
var small = generateArrOfRandomNumbers(10);
var medium = generateArrOfRandomNumbers(75);
var large = generateArrOfRandomNumbers(1000);
console.log("small arr: [" + small + "]\n");
console.log("medium arr: [" + medium + "]\n");
console.log("large arr: [" + large + "]\n");
console.log('===========================\n===========================\n');
console.time('runtime');
console.log("sorted small arr: [" + insertionSort(small) + "]\n");
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log("sorted medium arr: [" + insertionSort(medium) + "]\n");
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log("sorted large arr: [" + insertionSort(large) + "]\n");
console.timeEnd('runtime');
console.log();
