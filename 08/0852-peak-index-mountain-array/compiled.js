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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
function peakIndexInMountainArray(arr) {
    var maxValue = arr[0];
    var index = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
            index = i;
        }
    }
    return index;
}
function peakIndexInMountainArrayJsMethods(arr) {
    return arr.indexOf(Math.max.apply(Math, __spread(arr)));
}
function peakIndexInMountainArrayBinarySearch(arr, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length - 1; }
    if (!arr.length)
        return -1;
    var mid = Math.round((start + end) / 2);
    if (arr[mid] < arr[mid - 1])
        return peakIndexInMountainArrayBinarySearch(arr, start, mid);
    if (arr[mid] < arr[mid + 1])
        return peakIndexInMountainArrayBinarySearch(arr, mid, end);
    return mid;
}
console.time('runtime');
console.log(peakIndexInMountainArray([0, 1, 0]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(peakIndexInMountainArray([0, 2, 1, 0]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]));
console.timeEnd('runtime');
console.log();
console.log('------');
console.time('runtime');
console.log(peakIndexInMountainArrayJsMethods([0, 1, 0]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(peakIndexInMountainArrayJsMethods([0, 2, 1, 0]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(peakIndexInMountainArrayJsMethods([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]));
console.timeEnd('runtime');
console.log();
console.log('------');
console.time('runtime');
console.log(peakIndexInMountainArrayBinarySearch([0, 1, 0]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(peakIndexInMountainArrayBinarySearch([0, 2, 1, 0]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(peakIndexInMountainArrayBinarySearch([
    24,
    69,
    100,
    99,
    79,
    78,
    67,
    36,
    26,
    19,
]));
console.timeEnd('runtime');
console.log();
