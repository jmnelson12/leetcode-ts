function groupAnagrams(strs) {
    var hashMap = {};
    for (var i = 0; i < strs.length; i++) {
        var sorted = strs[i].split('').sort().join('');
        if (hashMap.hasOwnProperty(sorted)) {
            hashMap[sorted].push(strs[i]);
        }
        else {
            hashMap[sorted] = [strs[i]];
        }
    }
    return Object.values(hashMap);
}
console.time('runtime');
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(groupAnagrams(['']));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(groupAnagrams(['a']));
console.timeEnd('runtime');
console.log();
