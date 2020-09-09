var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
function firstUniqChar(s) {
    var e_1, _a;
    var hashMap = {};
    var result = s.length;
    for (var i = 0; i < s.length; i++) {
        if (hashMap.hasOwnProperty(s[i])) {
            hashMap[s[i]].count++;
            hashMap[s[i]].index = i;
        }
        else {
            hashMap[s[i]] = { count: 0, index: i };
        }
    }
    try {
        for (var _b = __values(Object.entries(hashMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
            if (value.count === 0 && value.index < result) {
                result = value.index;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result === s.length ? -1 : result;
}
console.time('runtime');
console.log(firstUniqChar('leetcode'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(firstUniqChar('loveleetcode'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(firstUniqChar('cc'));
console.timeEnd('runtime');
console.log();
