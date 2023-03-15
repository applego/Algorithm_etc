"use strict";
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
exports.determinant_BP = exports.determinant = void 0;
function determinant(m) {
    // return the determinant of the matrix passed in
    // console.log(m[0].length);
    // console.log([...m]);
    switch (m[0].length) {
        case 1:
            return Math.abs(m[0][0]);
        case 2:
            // const a = m[0][0];
            // const b = m[0][1];
            // const c = m[1][0];
            // const d = m[1][1];
            // return len2(a, b, c, d);
            return len2(m);
        default:
            // let e1: number, e2: number, e3: number;
            // [e1, e2, e3] = m[0];
            var result_1 = 0;
            m[0].forEach(function (row0_val, col_idx) {
                var new_m = make_minor(m, col_idx);
                if (col_idx % 2 === 0)
                    result_1 += row0_val * determinant(new_m);
                else
                    result_1 -= row0_val * determinant(new_m);
            });
            return result_1;
    }
}
exports.determinant = determinant;
// const len1 = (m: number[][]): number => {
//   return Math.abs(m[0][0]);
// }
var len22 = function (a, b, c, d) {
    // return m[0][0] * m[1][1] - m[0][1] * m[1][0]; // a * d - b * c
    return a * d - b * c;
};
var len2 = function (m) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0]; // a * d - b * c
};
var make_minor = function (m, col_idx) {
    var minor = new Array(m[0].length - 1);
    for (var y = 0; y < m[0].length - 1; y++) {
        minor[y] = new Array(m[0].length - 1).fill(0);
    }
    var rest_idxs = __spread(Array(m[0].length)).map(function (_, i) { return i; }).filter((function (val) { return val !== col_idx; }));
    __spread(Array(m[0].length - 1)).map(function (_, i) { return i; })
        .forEach(function (row_idx) {
        rest_idxs
            .forEach(function (col_idx, idx) {
            minor[row_idx][idx] = m[row_idx + 1][col_idx];
        });
    });
    return minor;
};
var determinant_BP = function (m) {
    if (m.length === 1) {
        return m[0][0];
    }
    else {
        var res_1 = 0;
        m[0].forEach(function (e, i) {
            res_1 += Math.pow(-1, i) * e * determinant_BP(minor(m, i));
        });
        return res_1;
    }
};
exports.determinant_BP = determinant_BP;
var minor = function (m, i) {
    return m.slice(0).splice(1).map(function (e) { return e.filter(function (_, idx) { return i !== idx; }); });
};
//# sourceMappingURL=4 kyu Matrix Determinant.js.map