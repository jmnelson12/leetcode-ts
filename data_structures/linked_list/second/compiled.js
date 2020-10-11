var LinkedListNode = (function () {
    function LinkedListNode(data, next) {
        this.data = data;
        if (next)
            this.next = next;
    }
    return LinkedListNode;
}());
var LinkedList = (function () {
    function LinkedList() {
    }
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
    };
    LinkedList.prototype.prepend = function (data) {
        var newNode = new LinkedListNode(data);
        newNode.next = this.head;
        this.head = newNode;
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
LL.append(3);
LL.append(4);
LL.append(5);
LL.prepend(0);
console.log(LL.contains(2));
LL.delete(2);
console.log(LL.contains(2));
console.log(JSON.stringify(LL.top));
