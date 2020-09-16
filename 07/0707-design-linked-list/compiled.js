var LinkedListNode = (function () {
    function LinkedListNode(val, next) {
        if (next === void 0) { next = null; }
        this.val = val;
        this.next = next;
    }
    return LinkedListNode;
}());
var MyLinkedList = (function () {
    function MyLinkedList(head) {
        if (head === void 0) { head = null; }
        this.head = head;
        this.tail = null;
        this.size = 0;
    }
    MyLinkedList.prototype.get = function (index) {
        if (index >= this.size || index < 0)
            return -1;
        var currentIndex = 0;
        var currentNode = this.head;
        while (currentNode) {
            if (currentIndex === index)
                return currentNode.val;
            currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.next;
            currentIndex++;
        }
        return -1;
    };
    MyLinkedList.prototype.addAtHead = function (val) {
        var newNode = new LinkedListNode(val);
        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            this.head = newNode;
            this.tail = this.head;
        }
        this.size++;
    };
    MyLinkedList.prototype.addAtTail = function (val) {
        var newNode = new LinkedListNode(val);
        if (this.tail) {
            this.tail.next = newNode;
        }
        else {
            this.head = newNode;
        }
        this.tail = newNode;
        this.size++;
    };
    MyLinkedList.prototype.addAtIndex = function (index, val) {
        if (index > this.size || index < 0)
            return;
        if (index === this.size) {
            this.addAtTail(val);
            return;
        }
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        var prevNode = null;
        var currNode = this.head;
        while (index && currNode) {
            prevNode = currNode;
            currNode = currNode === null || currNode === void 0 ? void 0 : currNode.next;
            index--;
        }
        if (prevNode)
            prevNode.next = new LinkedListNode(val, currNode);
        this.size++;
    };
    MyLinkedList.prototype.deleteAtIndex = function (index) {
        if (index >= this.size || index < 0)
            return;
        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            if (this.size === 0)
                this.tail = null;
            return;
        }
        var prevNode = null;
        var currNode = this.head;
        while (index && currNode) {
            prevNode = currNode;
            currNode = currNode === null || currNode === void 0 ? void 0 : currNode.next;
            index--;
        }
        if (prevNode) {
            prevNode.next = currNode === null || currNode === void 0 ? void 0 : currNode.next;
        }
        else {
            this.head = currNode === null || currNode === void 0 ? void 0 : currNode.next;
        }
        this.size--;
    };
    return MyLinkedList;
}());
var linkedList3 = new MyLinkedList();
linkedList3.addAtIndex(0, 10);
linkedList3.addAtIndex(0, 20);
linkedList3.addAtIndex(1, 30);
console.log(JSON.stringify(linkedList3));
