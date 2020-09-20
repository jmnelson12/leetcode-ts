function isValid(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        var char = s.charAt(i);
        if (char === '(') {
            stack.push(')');
        }
        else if (char === '[') {
            stack.push(']');
        }
        else if (char === '{') {
            stack.push('}');
        }
        else if (!stack.length || stack.pop() !== char)
            return false;
    }
    return !stack.length;
}
console.time('runtime');
console.log(isValid('()'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(isValid('()[]{}'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(isValid('(]'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(isValid('([)]'));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(isValid('{[]}'));
console.timeEnd('runtime');
console.log();
