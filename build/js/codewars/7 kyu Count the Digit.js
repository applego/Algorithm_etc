"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nbDig = void 0;
function nbDig(n, d) {
    var strD = d.toString();
    var count = 0;
    for (var i = 1; i <= n; i++) {
        var square = Math.pow(i, 2);
        count += square.toString().split('').filter(function (c) { return c === strD; }).length;
    }
    return count;
}
exports.nbDig = nbDig;
//# sourceMappingURL=7 kyu Count the Digit.js.map