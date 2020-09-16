function generateArrOfRandomNumbers(size, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.min, min = _c === void 0 ? 1 : _c, _d = _b.max, max = _d === void 0 ? 5000 : _d;
    var arr = new Array(size - 1);
    for (var i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min) + min);
    }
    return arr;
}
function merge(arr, left, middle, right) {
    var LSubArrSize = middle - left + 1;
    var RSubArrSize = right - middle;
    var LSubArr = new Array(LSubArrSize);
    var RSubArr = new Array(RSubArrSize);
    for (var i = 0; i < LSubArrSize; i++) {
        LSubArr[i] = arr[left + i];
    }
    for (var i = 0; i < RSubArrSize; i++) {
        RSubArr[i] = arr[middle + 1 + i];
    }
    var LSubArrIndex = 0;
    var RSubArrIndex = 0;
    var arrIndex = 1;
    while (LSubArrIndex < LSubArrSize && RSubArrIndex < RSubArrSize) {
        if (LSubArr[LSubArrIndex] < RSubArr[RSubArrIndex]) {
            arr[arrIndex] = LSubArr[LSubArrIndex];
            LSubArrIndex++;
        }
        else {
            arr[arrIndex] = RSubArr[RSubArrIndex];
            RSubArrIndex++;
        }
        arrIndex++;
    }
    while (LSubArrIndex < LSubArrSize) {
        arr[arrIndex] = LSubArr[LSubArrIndex];
        LSubArrIndex++;
        arrIndex++;
    }
    while (RSubArrIndex < RSubArrSize) {
        arr[arrIndex] = RSubArr[RSubArrIndex];
        RSubArrIndex++;
        arrIndex++;
    }
}
function mergeSort(arr, left, right) {
    if (left < right) {
        var middle = Math.floor((left + right) / 2);
        mergeSort(arr, left, middle);
        mergeSort(arr, middle + 1, right);
        merge(arr, left, middle, right);
    }
    return arr;
}
var small = generateArrOfRandomNumbers(10, { max: 20 });
var medium = generateArrOfRandomNumbers(75);
var large = generateArrOfRandomNumbers(1000);
console.log("small arr: [" + small + "]\n");
console.log('===========================\n===========================\n');
console.time('runtime');
console.log("sorted small arr: " + mergeSort(small, 0, small.length - 1));
console.timeEnd('runtime');
console.log();
