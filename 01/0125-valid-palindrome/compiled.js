function isPalindromeWithMethods(s) {
    var validStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return validStr === validStr.split('').reverse().join('');
}
function isPalindromeWithLoop(s) {
    var validStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for (var i = 0; i < Math.floor(validStr.length / 2); i++) {
        if (validStr.charAt(i) !== validStr.charAt(validStr.length - i - 1))
            return false;
    }
    return true;
}
console.time('runtime');
console.log('with methods: ', isPalindromeWithMethods('A man, a plan, a canal: Panama'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log('with methods: ', isPalindromeWithMethods('race a car'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log('with loop: ', isPalindromeWithLoop('A man, a plan, a canal: Panama'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log('with loop: ', isPalindromeWithLoop('race a car'));
console.timeEnd('runtime');
console.log();
