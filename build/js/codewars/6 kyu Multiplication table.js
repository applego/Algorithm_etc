"use strict";
/*
1 2 3
2 4 6
3 6 9
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicationTable = void 0;
function multiplicationTable(size) {
    var multiplication_table = [];
    for (var i = 1; i <= size; i++) {
        var array = [];
        for (var j = 1; j <= size; j++) {
            array.push(i * j);
        }
        multiplication_table.push(array);
    }
    return multiplication_table;
    // let test = [...Array(size)]
    //   .map((v, i) => {
    //     // return [++i, i * 2, i*3]
    //     console.log(v, i);
    //   });
}
exports.multiplicationTable = multiplicationTable;
//# sourceMappingURL=6 kyu Multiplication table.js.map