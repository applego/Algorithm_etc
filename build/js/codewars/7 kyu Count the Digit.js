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
    return __spread(Array(n + 1)).map(function (_, i) { return i; })
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