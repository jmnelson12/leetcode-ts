var MinStack = (function () {
    function MinStack() {
        this.stack = [];
    }
    MinStack.prototype.push = function (x) {
        this.stack.push({
            val: x,
            min: this.stack.length ? Math.min(x, this.getMin()) : x,
        });
    };
    MinStack.prototype.pop = function () {
        this.stack.pop();
    };
    MinStack.prototype.top = function () {
        return this.stack[this.stack.length - 1].val;
    };
    MinStack.prototype.getMin = function () {
        return this.stack[this.stack.length - 1].min;
    };
    return MinStack;
}());
var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.time('runtime');
console.log(minStack.getMin());
console.timeEnd('runtime');
console.log();
minStack.pop();
console.time('runtime');
console.log(minStack.top());
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(minStack.getMin());
console.timeEnd('runtime');
console.log();
