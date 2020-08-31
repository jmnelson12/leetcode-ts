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
console.time('runtime');
console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(numJewelsInStones('z', 'ZZ'));
console.timeEnd('runtime');
console.log();
