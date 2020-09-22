var ListNode = (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
var getIntersectionNode = function (headA, headB) {
    var list1 = headA;
    var list2 = headB;
    while (list1 != list2) {
        list1 = !list1 ? headB : list1.next;
        list2 = !list2 ? headA : list2.next;
    }
    return list1;
};
var ex1Intersection = new ListNode(8, new ListNode(4, new ListNode(5)));
var ex1A = new ListNode(4, new ListNode(1, ex1Intersection));
var ex1B = new ListNode(5, new ListNode(6, new ListNode(1, ex1Intersection)));
var ex2Intersection = new ListNode(2, new ListNode(4));
var ex2A = new ListNode(1, new ListNode(9, new ListNode(1, ex2Intersection)));
var ex2B = new ListNode(3, ex2Intersection);
var ex3A = new ListNode(1, new ListNode(6, new ListNode(4)));
var ex3B = new ListNode(1, new ListNode(5));
console.time('runtime');
console.log(JSON.stringify(getIntersectionNode(ex1A, ex1B)));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(JSON.stringify(getIntersectionNode(ex2A, ex2B)));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(JSON.stringify(getIntersectionNode(ex3A, ex3B)));
console.timeEnd('runtime');
console.log();
