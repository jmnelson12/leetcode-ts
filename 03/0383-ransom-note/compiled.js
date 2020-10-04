function canConstruct(ransomNote, magazine) {
    var magazineCharFreqs = new Map();
    for (var i = 0; i < magazine.length; i++) {
        magazineCharFreqs.set(magazine[i], (magazineCharFreqs.get(magazine[i]) || 0) + 1);
    }
    for (var i = 0; i < ransomNote.length; i++) {
        var currentFreq = magazineCharFreqs.get(ransomNote[i]);
        if (!currentFreq)
            return false;
        magazineCharFreqs.set(ransomNote[i], currentFreq - 1);
    }
    return true;
}
console.time('runtime');
console.log(canConstruct('a', 'b'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(canConstruct('aa', 'ab'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(canConstruct('aa', 'aab'));
console.timeEnd('runtime');
console.log();
