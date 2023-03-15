"use strict";
var correct = [1, 2, 3, 4, 5, 6, 7, 8, 9].toString();
function validSolution(board) {
    // check rows
    for (var row = 0; row < 9; row++) {
        if (board[row].slice().sort().toString() !== correct) {
            return false;
        }
    }
    // board.forEach(function (row) {
    //     if (row.slice().sort().toString() !== correct) {
    //         isValid = false;
    //         return;
    //     }
    // });
    // check columns
    var columns = board.map(function (col, i) { return board.map(function (row) { return row[i]; }); });
    for (var col = 0; col < 9; col++) {
        if (columns[col].slice().sort().toString() != correct) {
            return false;
        }
    }
    // board.map((col, i) => board.map(row => row[i])).forEach(function (col) {
    //     if (col.slice().sort().toString() != correct) {
    //         isValid = false;
    //         return;
    //     }
    // });
    // check subgrids
    for (var i_1 = 0; i_1 < 3; i_1++) {
        for (var j = 0; j < 3; j++) {
            var grid = [];
            for (var ig = i_1 * 3; ig < (i_1 + 1) * 3; ig++) {
                grid = grid.concat(board[ig].slice(j * 3, (j + 1) * 3));
                console.log(grid);
            }
            if (grid.slice().sort().toString() != correct)
                return false;
        }
    }
    // all clear
    return true;
}
var Test = require('./TestCodewar.js');
var test = new Test();
test.assert_equals(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]), true);
test.assert_equals(validSolution([[1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [9, 1, 2, 3, 4, 5, 6, 7, 8]]), false);
//# sourceMappingURL=4 kyu Sudoku Solution Validator.js.map