var MyHashSet = (function () {
    function MyHashSet() {
        this.hashSet = {};
    }
    MyHashSet.prototype.add = function (key) {
        this.hashSet[key] = true;
    };
    MyHashSet.prototype.remove = function (key) {
        delete this.hashSet[key];
    };
    MyHashSet.prototype.contains = function (key) {
        return this.hashSet.hasOwnProperty(key);
    };
    return MyHashSet;
}());
var hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
console.log(hashSet.contains(1));
console.log(hashSet.contains(3));
hashSet.add(2);
console.log(hashSet.contains(2));
hashSet.remove(2);
console.log(hashSet.contains(2));
