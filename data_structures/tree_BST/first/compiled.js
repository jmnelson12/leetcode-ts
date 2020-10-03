var TreeNode = (function () {
    function TreeNode(data) {
        this.data = data;
    }
    return TreeNode;
}());
var BST = (function () {
    function BST(root) {
        if (root === void 0) { root = null; }
        this.root = root;
    }
    BST.prototype.insertRecursively = function (root, data) {
        if (!root) {
            root = new TreeNode(data);
            return root;
        }
        if (data <= root.data) {
            root.left = this.insertRecursively(root.left, data);
        }
        else if (data > root.data) {
            root.right = this.insertRecursively(root.right, data);
        }
        return root;
    };
    BST.prototype.insert = function (data) {
        this.root = this.insertRecursively(this.root, data);
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
    BST.prototype.printInOrderRecursively = function (root) {
        if (root) {
            this.printInOrderRecursively(root.left);
            console.log("(InOrder) data is: " + root.data);
            this.printInOrderRecursively(root.right);
        }
    };
    BST.prototype.printInOrder = function () {
        this.printInOrderRecursively(this.root);
    };
    BST.prototype.printPreOrderRecursively = function (root) {
        if (root) {
            console.log("(PreOrder) data is: " + root.data);
            this.printPreOrderRecursively(root.left);
            this.printPreOrderRecursively(root.right);
        }
    };
    BST.prototype.printPreOrder = function () {
        this.printPreOrderRecursively(this.root);
    };
    BST.prototype.printPostOrderRecursively = function (root) {
        if (root) {
            this.printPostOrderRecursively(root.left);
            this.printPostOrderRecursively(root.right);
            console.log("(PostOrder) data is: " + root.data);
        }
    };
    BST.prototype.printPostOrder = function () {
        this.printPostOrderRecursively(this.root);
    };
    BST.prototype.printUsingBreadth = function () {
        var stack = [this.root];
        while (stack.length) {
            var rowLength = stack.length;
            for (var i = 0; i < rowLength; i++) {
                var node = stack.shift();
                console.log("(Breadth) data is: " + node.data);
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
