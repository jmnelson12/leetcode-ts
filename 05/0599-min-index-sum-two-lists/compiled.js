function findRestaurant(list1, list2) {
    var hashMap = {};
    for (var i = 0; i < list1.length; i++) {
        var list2Index = list2.indexOf(list1[i]);
        var iSum = i + list2Index;
        if (list2Index !== -1) {
            if (!hashMap.hasOwnProperty(iSum)) {
                hashMap[iSum] = [list1[i]];
            }
            else {
                hashMap[iSum].push(list1[i]);
            }
        }
    }
    for (var i = 0; i < list1.length + list2.length; i++) {
        if (hashMap.hasOwnProperty(i)) {
            return hashMap[i];
        }
    }
    return [];
}
console.time('runtime');
console.log(findRestaurant(['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], [
    'Piatti',
    'The Grill at Torrey Pines',
    'Hungry Hunter Steakhouse',
    'Shogun',
]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(findRestaurant(['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['KFC', 'Shogun', 'Burger King']));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(findRestaurant(['Shogun', 'KFC', 'Burger King', 'The Grill'], ['KFC', 'Shogun', 'Burger King']));
console.timeEnd('runtime');
console.log();
