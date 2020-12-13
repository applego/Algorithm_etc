"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.determinant = void 0;
function determinant(m) {
    // return the determinant of the matrix passed in
    console.log(m[0].length);
    console.log(__spreadArrays(m));
    switch (m[0].length) {
        case 1:
            return Math.abs(m[0][0]);
        case 2:
            var a = m[0][0];
            var b = m[0][1];
            var c = m[1][0];
            var d = m[1][1];
            return len2(a, b, c, d);
        default:
            // let e1: number, e2: number, e3: number;
            // [e1, e2, e3] = m[0];
            var result_1 = 0;
            m[0].forEach(function (row0_val, col_idx) {
                //* 関数化
                var new_m = make_minor(m, col_idx);
                if (col_idx % 2 === 0)
                    result_1 += row0_val * determinant(new_m);
                else
                    result_1 -= row0_val * determinant(new_m);
            });
            return result_1;
        // default:
        //   let result_def: number = 0;
        //   m[0].forEach((row0_val, col_idx) => {
        //     let new_m: number[][];
        //     let row_idx: number = 1;
        //     rest.forEach((val, idx) => {
        //       new_m[row_idx][val] =
        //     })
        //   })
    }
    //
}
exports.determinant = determinant;
// const len1 = (m: number[][]): number => {
//   return Math.abs(m[0][0]);
// }
var len2 = function (a, b, c, d) {
    // return m[0][0] * m[1][1] - m[0][1] * m[1][0]; // a * d - b * c
    return a * d - b * c;
};
var make_minor = function (m, col_idx) {
    var minor = new Array(m[0].length - 1);
    for (var y = 0; y < m[0].length - 1; y++) {
        minor[y] = new Array(m[0].length - 1).fill(0);
    }
    var rest_idxs = __spreadArrays(Array(m[0].length)).map(function (_, i) { return i; }).filter((function (val) { return val !== col_idx; }));
    __spreadArrays(Array(m[0].length - 1)).map(function (_, i) { return i; })
        .forEach(function (row_idx) {
        rest_idxs
            .forEach(function (col_idx, idx) {
            minor[row_idx][idx] = m[row_idx + 1][col_idx];
        });
    });
    return minor;
};
//# sourceMappingURL=4 kyu Matrix Determinant.js.map