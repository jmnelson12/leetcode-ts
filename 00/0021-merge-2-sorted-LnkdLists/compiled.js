var ListNode = (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function mergeTwoLists(l1, l2) {
    if (!l1)
        return l2;
    if (!l2)
        return l1;
    var newList = new ListNode(0);
    var current = newList;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            current.next = new ListNode(l1.val);
            l1 = l1.next;
        }
        else {
            current.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        current = current.next;
    }
    if (l1) {
        current.next = l1;
    }
    if (l2) {
        current.next = l2;
    }
    return newList.next;
}
var l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
var l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
console.time('runtime');
console.log(JSON.stringify(mergeTwoLists(l1, l2)));
console.timeEnd('runtime');
console.log();
