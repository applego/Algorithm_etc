"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.divisors2 = exports.divisors = void 0;
function divisors(n) {
    var lenDives = n === 1 ? 1 : 2; // 1, n
    for (var i = 2; i < n; i++) {
        if (n % i === 0)
            lenDives += 1;
    }
    return lenDives;
}
exports.divisors = divisors;
function divisors2(n) {
    return __spreadArrays(Array(n)).map(function (v, i) { return ++i; }) // 1...n
        .reduce(function (previousVal, currentVal, currentIdx, array) {
        // console.log(previousVal, currentVal, currentIdx);
        return previousVal + (n % currentVal === 0 ? 1 : 0);
    }, 0);
}
exports.divisors2 = divisors2;
//# sourceMappingURL=7 kyu Count the divisors of a number.js.map