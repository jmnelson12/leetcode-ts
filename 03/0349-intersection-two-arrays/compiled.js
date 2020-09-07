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
function intersection(nums1, nums2) {
    var hashSet = new Set();
    for (var i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            hashSet.add(nums1[i]);
        }
    }
    return __spread(hashSet);
}
console.time('runtime');
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
console.timeEnd('runtime');
console.log();
