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
    return __spread(Array(n)).map(function (v, i) { return ++i; }) // 1...n
        .reduce(function (previousVal, currentVal, currentIdx, array) {
        // console.log(previousVal, currentVal, currentIdx);
        return previousVal + (n % currentVal === 0 ? 1 : 0);
    }, 0);
}
exports.divisors2 = divisors2;
//# sourceMappingURL=7 kyu Count the divisors of a number.js.map