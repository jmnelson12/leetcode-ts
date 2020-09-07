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
function containsDuplicateNoSet(nums) {
    var hashMap = {};
    for (var i = 0; i < nums.length; i++) {
        if (hashMap.hasOwnProperty(nums[i]))
            return true;
        hashMap[nums[i]] = 1;
    }
    return false;
}
function containsDuplicateWithSet(nums) {
    var copy = __spread(new Set(nums));
    return copy.length !== nums.length;
}
console.time('runtime');
console.log(containsDuplicateNoSet([1, 2, 3, 1]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(containsDuplicateNoSet([1, 2, 3, 4]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(containsDuplicateNoSet([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.timeEnd('runtime');
console.log();
console.log('#####################\n#####################');
console.time('runtime');
console.log(containsDuplicateWithSet([1, 2, 3, 1]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(containsDuplicateWithSet([1, 2, 3, 4]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(containsDuplicateWithSet([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.timeEnd('runtime');
console.log();
