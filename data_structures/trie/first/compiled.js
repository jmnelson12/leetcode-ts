var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var TrieNode = (function () {
    function TrieNode() {
        this.keys = new Map();
        this.end = false;
    }
    Object.defineProperty(TrieNode.prototype, "setEnd", {
        set: function (value) {
            this.end = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrieNode.prototype, "getEnd", {
        get: function () {
            return this.end;
        },
        enumerable: false,
        configurable: true
    });
    return TrieNode;
}());
var Trie = (function () {
    function Trie() {
        this.root = new TrieNode();
    }
    Trie.prototype.add = function (input, node) {
        if (node === void 0) { node = this.root; }
        if (!input.length) {
            node.setEnd = true;
            return;
        }
        if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new TrieNode());
            return this.add(input.substring(1), node.keys.get(input[0]));
        }
        return this.add(input.substring(1), node.keys.get(input[0]));
    };
    Trie.prototype.isWord = function (word) {
        var node = this.root;
        while (word.length > 1) {
            if (!node.keys.has(word[0]))
                return false;
            node = node.keys.get(word[0]);
            word = word.substring(1);
        }
        return node.keys.has(word) && node.keys.get(word).getEnd;
    };
    Trie.prototype.appendStrToArr = function (node, str, words) {
        var e_1, _a;
        if (node.keys.size !== 0) {
            try {
                for (var _b = __values(node.keys.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var letter = _c.value;
                    this.appendStrToArr(node.keys.get(letter), str.concat(letter), words);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (node.getEnd) {
                words.push(str);
            }
        }
        else {
            str.length > 0 && words.push(str);
            return;
        }
    };
    Trie.prototype.print = function () {
        var words = [];
        this.appendStrToArr(this.root, '', words);
        return words;
    };
    return Trie;
}());
var myTrie = new Trie();
myTrie.add('ball');
myTrie.add('bat');
myTrie.add('batter');
myTrie.add('doll');
myTrie.add('dork');
myTrie.add('do');
myTrie.add('dorm');
myTrie.add('send');
myTrie.add('sense');
console.log(myTrie.isWord('doll'));
console.log(myTrie.isWord('dor'));
console.log(myTrie.isWord('dorf'));
console.log(myTrie.isWord('batte'));
console.log(myTrie.print());
