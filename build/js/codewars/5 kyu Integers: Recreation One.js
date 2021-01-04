"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964_1227 = void 0;
var G964_1227 = /** @class */ (function () {
    function G964_1227() {
    }
    /**
     * 約数の配列を返す
     */
    G964_1227.getDivisors = function (n) {
        var result = [];
        for (var i = 1; i <= n; i++) {
            if (n % i === 0)
                result.push(i);
        }
        return result;
    };
    G964_1227.listSquared = function (m, n) {
        // your code
        console.log(m, n);
        var result = [];
        for (var i = m; i <= n; i++) {
            //
            var divisors = G964_1227.getDivisors(i);
            var sumOfDivisors = divisors.reduce(function (acc, val) {
                return acc + Math.pow(val, 2);
            }, 0);
            var square = Math.sqrt(sumOfDivisors);
            if (Number.isInteger(square))
                result.push([i, sumOfDivisors]);
        }
        return result;
    };
    return G964_1227;
}());
exports.G964_1227 = G964_1227;
// import Test from './TestCodewar';
// Test.assert_equals(G964_1227.listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]]);
// Test.assert_equals(G964_1227.listSquared(42, 250), [[42, 2500], [246, 84100]]);
// Test.assert_equals(G964_1227.listSquared(250, 500), [[287, 84100]]);
// Test.assert_equals(G964_1227.listSquared(300, 600), []);
//# sourceMappingURL=5 kyu Integers: Recreation One.js.map