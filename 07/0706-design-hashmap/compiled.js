var MyHashMap = (function () {
    function MyHashMap() {
        this.hashMap = {};
    }
    MyHashMap.prototype.put = function (key, value) {
        this.hashMap[key] = value;
    };
    MyHashMap.prototype.get = function (key) {
        return this.hashMap.hasOwnProperty(key) ? this.hashMap[key] : -1;
    };
    MyHashMap.prototype.remove = function (key) {
        delete this.hashMap[key];
    };
    return MyHashMap;
}());
var hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
console.log(hashMap.get(1));
console.log(hashMap.get(3));
hashMap.put(2, 1);
console.log(hashMap.get(2));
hashMap.remove(2);
console.log(hashMap.get(2));
