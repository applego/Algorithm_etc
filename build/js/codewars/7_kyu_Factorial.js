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
exports.factorial_shorter = exports.factorial = void 0;
/**
 * return n!
 */
function factorial(n) {
    if (n === 0 || n === 1)
        return 1;
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
exports.factorial = factorial;
function factorial_shorter(n) {
    if (n === 0 || n === 1)
        return 1;
    return __spread(Array(n)).map(function (_, i) { return i + 1; })
        .reduce(function (acc, curr) {
        return acc * curr;
    }, 1);
}
exports.factorial_shorter = factorial_shorter;
//# sourceMappingURL=7 kyu Factorial.js.map