var HashSet = (function () {
    function HashSet() {
        this.set = {};
    }
    Object.defineProperty(HashSet.prototype, "leObj", {
        get: function () {
            return this.set;
        },
        enumerable: false,
        configurable: true
    });
    HashSet.prototype.add = function (key) {
        this.set[key] = true;
    };
    HashSet.prototype.contains = function (key) {
        return this.set[key] || false;
    };
    HashSet.prototype.remove = function (key) {
        delete this.set[key];
    };
    return HashSet;
}());
var HashMap = (function () {
    function HashMap() {
        this.map = {};
    }
    Object.defineProperty(HashMap.prototype, "leObj", {
        get: function () {
            return this.map;
        },
        enumerable: false,
        configurable: true
    });
    HashMap.prototype.put = function (key, value) {
        this.map[key] = value;
    };
    HashMap.prototype.get = function (key) {
        return this.map[key];
    };
    HashMap.prototype.remove = function (key) {
        delete this.map[key];
    };
    return HashMap;
}());
console.log('My Hash Set Example\n');
var mySet = new HashSet();
mySet.add('foo');
mySet.add('baz');
mySet.add('larry');
mySet.add('moe');
mySet.add('curly');
console.log(mySet.contains('foo'));
console.log(mySet.contains('jazz'));
console.log(mySet.contains('harry'));
mySet.remove('larry');
mySet.remove('joe');
mySet.remove('foo');
console.log(JSON.stringify(mySet.leObj));
console.log('\nMy Hash map Example\n');
var myMap = new HashMap();
myMap.put('foo', 1);
myMap.put('baz', 42);
myMap.put('larry', 12);
myMap.put('moe', 1152);
myMap.put('curly', 151);
console.log(myMap.get('foo'));
console.log(myMap.get('jazz'));
console.log(myMap.get('larry'));
myMap.remove('foo');
myMap.remove('moe');
console.log(JSON.stringify(myMap.leObj));
