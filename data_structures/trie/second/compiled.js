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
        this._end = false;
    }
    Object.defineProperty(TrieNode.prototype, "end", {
        get: function () {
            return this._end;
        },
        set: function (value) {
            this._end = value;
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
    Trie.prototype.add = function (str, node) {
        if (node === void 0) { node = this.root; }
        if (!str.length) {
            node.end = true;
            return;
        }
        var firstChar = str[0];
        if (!node.keys.has(firstChar)) {
            node.keys.set(firstChar, new TrieNode());
        }
        return this.add(str.substr(1), node.keys.get(firstChar));
    };
    Trie.prototype.isWord = function (str) {
        var node = this.root;
        while (str.length > 1) {
            var firstChar = str[0];
            if (!node.keys.has(firstChar))
                return false;
            node = node.keys.get(firstChar);
            str = str.substr(1);
        }
        return node.keys.has(str) && node.keys.get(str).end;
    };
    Trie.prototype.appendStrToArr = function (node, str, words) {
        var e_1, _a;
        if (node.keys.size !== 0) {
            try {
                for (var _b = __values(node.keys.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var char = _c.value;
                    this.appendStrToArr(node.keys.get(char), str.concat(char), words);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (node.end) {
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
