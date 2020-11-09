"use strict";
/*
example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964_1109 = void 0;
var G964_1109 = /** @class */ (function () {
    function G964_1109() {
    }
    G964_1109.digPow = function (n, p) {
        // nを１つずつ p乗, p+1乗... の和を取得 ①
        // nが①の約数ならそのkを返す　でなければ-1を返す
        var sum = n.toString().split('')
            .map(function (v) { return parseInt(v); })
            .reduce(function (previous, current, index) { return previous + Math.pow(current, (p + index)); }, 0);
        var divisor = sum / n;
        return Number.isInteger(divisor) ? divisor : -1;
    };
    return G964_1109;
}());
exports.G964_1109 = G964_1109;
//# sourceMappingURL=6 kyu Playing with digits.js.map
