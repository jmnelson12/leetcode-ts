var LinkedListNode = (function () {
    function LinkedListNode(data) {
        this.data = data;
    }
    return LinkedListNode;
}());
var LinkedList = (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            return this.size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkedList.prototype, "top", {
        get: function () {
            return this.head;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.append = function (data) {
        var newNode = new LinkedListNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        this.size++;
    };
    LinkedList.prototype.prepend = function (data) {
        var newNode = new LinkedListNode(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    };
    LinkedList.prototype.contains = function (data) {
        if (!this.head)
            return false;
        var current = this.head;
        while (current) {
            if (current.data === data)
                return true;
            current = current.next;
        }
        return false;
    };
    LinkedList.prototype.delete = function (data) {
        if (!this.head)
            return;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        var current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                break;
            }
            current = current.next;
        }
    };
    return LinkedList;
}());
var LL = new LinkedList();
LL.prepend(1);
LL.append(2);
LL.prepend(0);
console.log(LL.contains(2));
LL.delete(2);
console.log(LL.contains(2));
console.log(JSON.stringify(LL.top));
