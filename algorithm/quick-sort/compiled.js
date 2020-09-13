var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
function generateArrOfRandomNumbers(size, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.min, min = _c === void 0 ? 1 : _c, _d = _b.max, max = _d === void 0 ? 5000 : _d;
    var arr = new Array(size - 1);
    for (var i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min) + min);
    }
    return arr;
}
function swap(arr, i, j) {
    var _a;
    ;
    _a = __read([arr[j], arr[i]], 2), arr[i] = _a[0], arr[j] = _a[1];
}
function LPartition(arr, start, end) {
    var pivotValue = arr[end];
    var pivotIndex = start;
    for (var i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, end, pivotIndex);
    return pivotIndex;
}
function quickSort(arr, start, end) {
    if (start >= end)
        return;
    var index = LPartition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
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
console.log("sorted small arr: [" + quickSort(small, 0, small.length - 1) + "]");
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log("sorted medium arr: [" + quickSort(medium, 0, medium.length - 1) + "]");
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log("sorted large arr: [" + quickSort(large, 0, large.length - 1) + "]");
console.timeEnd('runtime');
console.log();
