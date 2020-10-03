var LeNode = (function () {
    function LeNode(data) {
        this.data = data;
    }
    return LeNode;
}());
var Queue = (function () {
    function Queue() {
    }
    Queue.prototype.isEmpty = function () {
        return !this.head;
    };
    Queue.prototype.peek = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.data;
    };
    Queue.prototype.add = function (data) {
        var newNode = new LeNode(data);
        if (this.tail)
            this.tail.next = newNode;
        this.tail = newNode;
        if (!this.head)
            this.head = newNode;
    };
    Queue.prototype.remove = function () {
        var _a, _b;
        var data = (_a = this.head) === null || _a === void 0 ? void 0 : _a.data;
        this.head = (_b = this.head) === null || _b === void 0 ? void 0 : _b.next;
        if (!this.head)
            this.tail = null;
        return data;
    };
    return Queue;
}());
var Stack = (function () {
    function Stack() {
    }
    Stack.prototype.isEmpty = function () {
        return !this.top;
    };
    Stack.prototype.peek = function () {
        var _a;
        return (_a = this.top) === null || _a === void 0 ? void 0 : _a.data;
    };
    Stack.prototype.push = function (data) {
        var newNode = new LeNode(data);
        newNode.next = this.top;
        this.top = newNode;
    };
    Stack.prototype.pop = function () {
        var _a, _b;
        var data = (_a = this.top) === null || _a === void 0 ? void 0 : _a.data;
        this.top = (_b = this.top) === null || _b === void 0 ? void 0 : _b.next;
        return data;
    };
    return Stack;
}());
console.log('\x1b[34m%s\x1b[0m', '----- Queue -----');
var myQueue = new Queue();
myQueue.add(1);
myQueue.add(2);
myQueue.add(3);
console.log("isEmpty: " + myQueue.isEmpty());
console.log("peek: " + myQueue.peek());
console.log("\nremove: " + myQueue.remove());
console.log("peek: " + myQueue.peek());
console.log("isEmpty: " + myQueue.isEmpty());
console.log("\nremove: " + myQueue.remove());
console.log("peek: " + myQueue.peek());
console.log("isEmpty: " + myQueue.isEmpty());
console.log("\nremove: " + myQueue.remove());
console.log("peek: " + myQueue.peek());
console.log("isEmpty: " + myQueue.isEmpty());
console.log('\x1b[34m%s\x1b[0m', '\n----- Stack -----');
var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log("isEmpty: " + myStack.isEmpty());
console.log("peek: " + myStack.peek());
console.log("\npop: " + myStack.pop());
console.log("peek: " + myStack.peek());
console.log("isEmpty: " + myStack.isEmpty());
console.log("\npop: " + myStack.pop());
console.log("peek: " + myStack.peek());
console.log("isEmpty: " + myStack.isEmpty());
console.log("\npop: " + myStack.pop());
console.log("peek: " + myStack.peek());
console.log("isEmpty: " + myStack.isEmpty());
