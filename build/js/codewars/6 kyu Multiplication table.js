"use strict";
/*
1 2 3
2 4 6
3 6 9
 */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicationTable2 = exports.multiplicationTable = void 0;
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
//BP
function multiplicationTable2(size) {
    return __spreadArrays(Array(size)).map(function (_, i) { return __spreadArrays(Array(size)).map(function (_, j) { return (i + 1) * (j + 1); }); });
}
exports.multiplicationTable2 = multiplicationTable2;
//# sourceMappingURL=6 kyu Multiplication table.js.map