function isValidSudoku(board) {
    var hashSet = new Set();
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var currentNum = board[i][j];
            if (currentNum !== '.') {
                var rowStr = currentNum + " is in row " + i;
                var colStr = currentNum + " is in col " + j;
                var subBoxStr = currentNum + " is in sub box " + Math.floor(i / 3) + "-" + Math.floor(j / 3);
                if (hashSet.has(rowStr) ||
                    hashSet.has(colStr) ||
                    hashSet.has(subBoxStr))
                    return false;
                hashSet.add(rowStr);
                hashSet.add(colStr);
                hashSet.add(subBoxStr);
            }
        }
    }
    return true;
}
console.time('runtime');
console.log(isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]));
console.timeEnd('runtime');
console.log();
console.time('runtime');
console.log(isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]));
console.timeEnd('runtime');
console.log();
