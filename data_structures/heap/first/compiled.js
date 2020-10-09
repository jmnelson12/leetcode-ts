var MinHeap = (function () {
    function MinHeap() {
        this.capacity = 10;
        this.size = 0;
        this.items = new Array(this.capacity);
    }
    MinHeap.prototype.getLeftChildIndex = function (parentIndex) {
        return 2 * parentIndex + 1;
    };
    MinHeap.prototype.getRightChildIndex = function (parentIndex) {
        return 2 * parentIndex + 2;
    };
    MinHeap.prototype.getParentIndex = function (childIndex) {
        return (childIndex - 1) / 2;
    };
    MinHeap.prototype.hasLeftChild = function (index) {
        return this.getLeftChildIndex(index) < this.size;
    };
    MinHeap.prototype.hasRightChild = function (index) {
        return this.getRightChildIndex(index) < this.size;
    };
    MinHeap.prototype.hasParent = function (index) {
        return this.getParentIndex(index) >= 0;
    };
    MinHeap.prototype.leftChild = function (index) {
        return this.items[this.getLeftChildIndex(index)];
    };
    MinHeap.prototype.rightChild = function (index) {
        return this.items[this.getRightChildIndex(index)];
    };
    MinHeap.prototype.parent = function (index) {
        return this.items[this.getParentIndex(index)];
    };
    MinHeap.prototype.swap = function (i, j) {
        var temp = this.items[i];
        this.items[i] = this.items[j];
        this.items[j] = temp;
    };
    MinHeap.prototype.ensureExtraCapacity = function () {
        if (this.size === this.capacity) {
            this.items = this.items.concat(new Array(this.capacity));
            this.capacity *= 2;
        }
    };
    MinHeap.prototype.peek = function () {
        if (!this.size)
            throw new Error();
        return this.items[0];
    };
    MinHeap.prototype.poll = function () {
        if (!this.size)
            throw new Error();
        var item = this.items[0];
        this.items[0] = this.items[this.size - 1];
        this.size--;
        this.heapifyDown();
        return item;
    };
    MinHeap.prototype.add = function (item) {
        this.ensureExtraCapacity();
        this.items[this.size] = item;
        this.size++;
        this.heapifyUp();
    };
    MinHeap.prototype.printHeap = function () {
        console.log(JSON.stringify(this.items));
    };
    MinHeap.prototype.heapifyUp = function () {
        var index = this.size - 1;
        while (this.hasParent(index) && this.parent(index) > this.items[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    };
    MinHeap.prototype.heapifyDown = function () {
        var index = 0;
        while (this.hasLeftChild(index)) {
            var smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) &&
                this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.items[index] < this.items[smallerChildIndex])
                break;
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    };
    return MinHeap;
}());
var myMinHeap = new MinHeap();
myMinHeap.add(10);
myMinHeap.add(15);
myMinHeap.add(20);
myMinHeap.add(17);
myMinHeap.add(25);
console.log(myMinHeap.peek());
console.log(myMinHeap.poll());
myMinHeap.printHeap();
console.log('--------');
console.log(myMinHeap.peek());
console.log(myMinHeap.poll());
myMinHeap.printHeap();
console.log('--------');
console.log(myMinHeap.peek());
console.log(myMinHeap.poll());
myMinHeap.printHeap();
console.log('--------');
console.log(myMinHeap.peek());
console.log(myMinHeap.poll());
myMinHeap.printHeap();
console.log('--------');
console.log(myMinHeap.peek());
console.log(myMinHeap.poll());
myMinHeap.printHeap();
