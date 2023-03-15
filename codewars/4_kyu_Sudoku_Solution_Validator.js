const correct = [1, 2, 3, 4, 5, 6, 7, 8, 9].toString()

function validSolution(board) {
    // check rows
    for (let row = 0; row < 9; row++){
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
    const columns = board.map((col, i) => board.map(row => row[i]));
    for (let col = 0; col < 9; col++){
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
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            let grid = [];
            for (let ig = i * 3; ig < (i + 1) * 3; ig++){
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


let Test = require('./TestCodewar.js');
let test = new Test();
test.assert_equals(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                                   [6, 7, 2, 1, 9, 5, 3, 4, 8],
                                   [1, 9, 8, 3, 4, 2, 5, 6, 7],
                                   [8, 5, 9, 7, 6, 1, 4, 2, 3],
                                   [4, 2, 6, 8, 5, 3, 7, 9, 1],
                                   [7, 1, 3, 9, 2, 4, 8, 5, 6],
                                   [9, 6, 1, 5, 3, 7, 2, 8, 4],
                                   [2, 8, 7, 4, 1, 9, 6, 3, 5],
                                   [3, 4, 5, 2, 8, 6, 1, 7, 9]]), true)
test.assert_equals(validSolution([[1, 2, 3, 4, 5, 6, 7, 8, 9],
                                   [2, 3, 4, 5, 6, 7, 8, 9, 1],
                                   [3, 4, 5, 6, 7, 8, 9, 1, 2],
                                   [4, 5, 6, 7, 8, 9, 1, 2, 3],
                                   [5, 6, 7, 8, 9, 1, 2, 3, 4],
                                   [6, 7, 8, 9, 1, 2, 3, 4, 5],
                                   [7, 8, 9, 1, 2, 3, 4, 5, 6],
                                   [8, 9, 1, 2, 3, 4, 5, 6, 7],
                                   [9, 1, 2, 3, 4, 5, 6, 7, 8]]), false)