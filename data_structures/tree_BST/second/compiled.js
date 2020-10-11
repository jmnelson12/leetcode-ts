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
    BST.prototype.printPreOrder = function () {
        var dfs = function (node) {
            console.log(node.data);
            if (node.left)
                dfs(node.left);
            if (node.right)
                dfs(node.right);
        };
        dfs(this.root);
    };
    BST.prototype.printPostOrder = function () {
        var dfs = function (node) {
            if (node.left)
                dfs(node.left);
            if (node.right)
                dfs(node.right);
            console.log(node.data);
        };
        dfs(this.root);
    };
    BST.prototype.printUsingBreadth = function () {
        var stack = [this.root];
        while (stack.length) {
            var size = stack.length;
            for (var i = 0; i < size; i++) {
                var node = stack.shift();
                console.log(node.data);
                if (node.left)
                    stack.push(node.left);
                if (node.right)
                    stack.push(node.right);
            }
        }
    };
    return BST;
}());
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
console.log('\x1b[34m%s\x1b[0m', '----- Should be true ----- ');
console.log("containsIterativelyDFS: " + myTree.contains(3));
console.log('\x1b[34m%s\x1b[0m', '\n----- Should be false -----');
console.log("containsIterativelyDFS: " + myTree.contains(4));
console.log('\x1b[34m%s\x1b[0m', '\n----- printInOrder -----');
myTree.printInOrder();
console.log('\x1b[34m%s\x1b[0m', '\n----- printPreOrder -----');
myTree.printPreOrder();
console.log('\x1b[34m%s\x1b[0m', '\n----- printPostOrder -----');
myTree.printPostOrder();
console.log('\x1b[34m%s\x1b[0m', '\n----- printUsingBreadth -----');
myTree.printUsingBreadth();
