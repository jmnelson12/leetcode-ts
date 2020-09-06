function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    var hashMap = {};
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        hashMap[char] = (hashMap[char] || 0) + 1;
    }
    for (var _a = 0, t_1 = t; _a < t_1.length; _a++) {
        var char = t_1[_a];
        if (!hashMap.hasOwnProperty(char))
            return false;
        hashMap[char]--;
    }
    return Object.values(hashMap).every(function (v) { return !v; });
}
console.time('runtime');
console.log(isAnagram('anagram', 'nagaram'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(isAnagram('rat', 'car'));
console.timeEnd('runtime');
console.log();
