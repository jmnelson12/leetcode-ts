var TreeNode = (function () {
    function TreeNode(data) {
        this.data = data;
    }
    return TreeNode;
}());
var BST = (function () {
    function BST(root) {
        this.root = root;
    }
    BST.prototype.insert = function (data) {
        var newNode = new TreeNode(data);
        var stack = [this.root];
        while (stack.length) {
            var node = stack.shift();
            if (data <= node.data) {
                if (!node.left) {
                    node.left = newNode;
                }
                else {
                    stack.push(node.left);
                }
            }
            else {
                if (!node.right) {
                    node.right = newNode;
                }
                else {
                    stack.push(node.right);
                }
            }
        }
    };
    BST.prototype.contains = function (data) {
        var stack = [this.root];
        while (stack.length) {
            var node = stack.shift();
            if (node) {
                if (node.data === data)
                    return true;
                stack.push(data <= node.data ? node.left : node.right);
            }
        }
        return false;
    };
    BST.prototype.printInOrder = function () {
        var dfs = function (node) {
            if (node.left)
                dfs(node.left);
            console.log(node.data);
            if (node.right)
                dfs(node.right);
        };
        dfs(this.root);
    };
    return BST;
}());
function BSTSearch(root, value) {
    if (!root)
        return false;
    if (root.data === value)
        return true;
    if (value <= root.data)
        return BSTSearch(root.left, value);
    return BSTSearch(root.right, value);
}
var myTree = new BST(new TreeNode(25));
myTree.insert(20);
myTree.insert(30);
myTree.insert(25);
myTree.insert(15);
myTree.insert(46);
myTree.insert(45);
myTree.insert(47);
myTree.insert(1);
myTree.insert(2);
myTree.insert(3);
myTree.insert(10);
myTree.insert(75);
myTree.insert(12);
console.log('Tree');
myTree.printInOrder();
console.log();
console.time('runtime');
console.log("Contains 10? " + BSTSearch(myTree.root, 10));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log("Contains 46? " + BSTSearch(myTree.root, 46));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log("Contains 565? " + BSTSearch(myTree.root, 565));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log("Contains -55? " + BSTSearch(myTree.root, -55));
console.timeEnd('runtime');
console.log();
