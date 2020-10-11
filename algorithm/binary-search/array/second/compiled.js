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
function binarySearchThroughArr(arr, start, end, value) {
    if (start > end)
        return false;
    var mid = Math.ceil((start + end) / 2);
    if (arr[mid] === value)
        return true;
    if (value < arr[mid])
        return binarySearchThroughArr(arr, start, mid - 1, value);
    return binarySearchThroughArr(arr, mid + 1, end, value);
}
var small = generateArrOfRandomNumbers(10).sort(function (a, b) { return a - b; });
var medium = generateArrOfRandomNumbers(75).sort(function (a, b) { return a - b; });
var large = generateArrOfRandomNumbers(1000).sort(function (a, b) { return a - b; });
console.log("small arr: [" + small + "]\n");
console.log("medium arr: [" + medium + "]\n");
console.log("large arr: [" + large + "]\n");
console.log('===========================\n===========================\n');
console.time('runtime');
console.log('10:', binarySearchThroughArr(small, 0, small.length - 1, 10));
console.timeEnd('runtime');
console.time('runtime');
console.log(small[3] + ":", binarySearchThroughArr(small, 0, small.length - 1, small[3]));
console.timeEnd('runtime');
console.log('----------');
console.time('runtime');
console.log('10:', binarySearchThroughArr(medium, 0, medium.length - 1, 10));
console.timeEnd('runtime');
console.time('runtime');
console.log(medium[3] + ":", binarySearchThroughArr(medium, 0, medium.length - 1, medium[3]));
console.timeEnd('runtime');
console.log('----------');
console.time('runtime');
console.log('10:', binarySearchThroughArr(large, 0, large.length - 1, 10));
console.timeEnd('runtime');
console.time('runtime');
console.log(large[3] + ":", binarySearchThroughArr(large, 0, large.length - 1, large[3]));
console.timeEnd('runtime');
