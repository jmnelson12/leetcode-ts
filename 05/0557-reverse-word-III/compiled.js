function reverseWords1(s) {
    return s
        .split(' ')
        .map(function (str) { return str.split('').reverse().join(''); })
        .join(' ');
}
function reverseWords2(s) {
    var returnStr = '';
    for (var i = 0; i < s.length; i++) {
        var wordLength = 0;
        for (var j = i; j < s.length; j++) {
            if (s.charAt(j) === ' ')
                break;
            wordLength += 1;
        }
        for (var y = i + wordLength - 1; y >= i; y--) {
            returnStr += s.charAt(y);
        }
        if (i + wordLength !== s.length)
            returnStr += ' ';
        i = i + wordLength;
    }
    return returnStr;
}
function reverseWords3(s) {
    var result = '';
    var currentWord = '';
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) === ' ') {
            result += currentWord + ' ';
            currentWord = '';
        }
        else {
            currentWord = s.charAt(i) + currentWord;
        }
    }
    return result + currentWord;
}
console.time('runtime');
console.log(reverseWords1("Let's take LeetCode contest"));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(reverseWords2("Let's take LeetCode contest"));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(reverseWords3("Let's take LeetCode contest"));
console.timeEnd('runtime');
console.log();
