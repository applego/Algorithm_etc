"use strict";
/*
1 2 3
2 4 6
3 6 9
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
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
    return __spread(Array(size)).map(function (_, i) { return __spread(Array(size)).map(function (_, j) { return (i + 1) * (j + 1); }); });
}
exports.multiplicationTable2 = multiplicationTable2;
//# sourceMappingURL=6 kyu Multiplication table.js.map