"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nbDig2 = exports.nbDig = void 0;
// OK
function nbDig(n, d) {
    var strD = d.toString();
    var count = 0;
    for (var i = 0; i <= n; i++) {
        var square = Math.pow(i, 2);
        count += square.toString().split('').filter(function (c) { return c === strD; }).length;
    }
    return count;
}
exports.nbDig = nbDig;
function nbDig2(n, d) {
    return __spreadArrays(Array(n + 1)).map(function (_, i) { return i; })
        .reduce(function (acc, val) {
        return acc +
            (Math.pow(val, 2)).toString()
                .split('')
                .filter(function (c) { return c === d.toString(); })
                .length;
    }, 0);
}
exports.nbDig2 = nbDig2;
//# sourceMappingURL=7 kyu Count the Digit.js.map