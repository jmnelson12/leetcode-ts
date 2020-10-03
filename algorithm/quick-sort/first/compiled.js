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
function partition(arr, start, end) {
    var pivotValue = arr[end];
    var swapIndex = start;
    for (var i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, swapIndex, i);
            swapIndex++;
        }
    }
    swap(arr, swapIndex, end);
    return swapIndex;
}
function quickSort(arr, start, end) {
    if (start >= end)
        return;
    var index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}
var small = generateArrOfRandomNumbers(10);
var medium = generateArrOfRandomNumbers(75);
var large = generateArrOfRandomNumbers(1000);
console.log("small arr: [" + small + "]\n");
console.log("medium arr: [" + medium + "]\n");
console.log("large arr: [" + large + "]\n");
console.log('===========================\n===========================\n');
console.time('runtime');
quickSort(small, 0, small.length - 1);
console.log("small sorted: [" + small + "]");
console.timeEnd('runtime');
console.log();
console.time('runtime');
quickSort(medium, 0, medium.length - 1);
console.log("medium sorted: [" + medium + "]");
console.timeEnd('runtime');
console.log();
console.time('runtime');
quickSort(large, 0, large.length - 1);
console.log("large sorted: [" + large + "]");
console.timeEnd('runtime');
console.log();
