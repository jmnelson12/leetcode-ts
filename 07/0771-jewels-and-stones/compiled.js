function numJewelsInStones(J, S) {
    var jewels = J.split('');
    var total = 0;
    var i = S.length;
    while (i--) {
        if (jewels.includes(S.charAt(i))) {
            total++;
        }
    }
    return total;
}
console.time('attempt 1');
console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.timeEnd('attempt 1');
console.log();
console.time('attempt 2');
console.log(numJewelsInStones('z', 'ZZ'));
console.timeEnd('attempt 2');
console.log();
