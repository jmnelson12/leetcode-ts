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
function isIsomorphic(s, t) {
    if (s.length !== t.length)
        return false;
    var hashMap = new Map();
    for (var i = 0; i < s.length; i++) {
        if (!hashMap.has(s.charAt(i))) {
            hashMap.set(s.charAt(i), t.charAt(i));
        }
        else {
            if (hashMap.get(s[i]) !== t[i])
                return false;
        }
    }
    return new Set(__spread(hashMap.values())).size === hashMap.size;
}
console.time('runtime');
console.log(isIsomorphic('egg', 'add'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(isIsomorphic('foo', 'bar'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(isIsomorphic('paper', 'title'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(isIsomorphic('aa', 'ab'));
console.timeEnd('runtime');
console.log();
