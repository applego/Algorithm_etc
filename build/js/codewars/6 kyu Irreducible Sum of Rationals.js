"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = exports.G96422 = void 0;
var G96422 = /** @class */ (function () {
    function G96422() {
    }
    G96422.sumFracts = function (l) {
        var bunbo = l.reduce(function (previousValue, currentValue) {
            return previousValue * currentValue[1];
        }, 1);
        var bunsi = l.reduce(function (previousValue, currentValue) {
            return previousValue + (currentValue[0] * (bunbo / currentValue[1]));
        }, 0);
        var gcd = G96422.getGcd(bunsi, bunbo);
        while (gcd !== 1) {
            bunsi /= gcd;
            bunbo /= gcd;
            gcd = G96422.getGcd(bunsi, bunbo);
        }
        if (bunbo === 1) {
            return bunsi.toString();
        }
        else {
            return "[" + bunsi + ", " + bunbo + "]";
        }
    };
    //こっちの方が少し早い？
    G96422.sumFracts1 = function (l) {
        if (l.length === 0)
            return null;
        // 分母の配列を渡してその最小公倍数を取得
        var arrBunbo = l.map(function (v) { return v[1]; });
        var smallestCommons = G96422.getLcmByArr(arrBunbo);
        //分子に最小公倍数/分母の値を乗算
        //分子の計算後の値の合計
        var sumOfCalculatedBunbo = l.reduce(function (previousValue, currentValue) {
            var calculatedBunbo = currentValue[0] * (smallestCommons / currentValue[1]);
            return previousValue + calculatedBunbo;
        }, 0);
        // const calculated = sumOfCalculatedBunbo / smallestCommons;
        var gcdOfCalculated = G96422.getGcd(sumOfCalculatedBunbo, smallestCommons);
        while (gcdOfCalculated !== 1) {
            sumOfCalculatedBunbo /= gcdOfCalculated;
            smallestCommons /= gcdOfCalculated;
            gcdOfCalculated = G96422.getGcd(sumOfCalculatedBunbo, smallestCommons);
        }
        if (smallestCommons === 1) {
            return sumOfCalculatedBunbo.toString();
        }
        else {
            return "[" + sumOfCalculatedBunbo + ", " + smallestCommons + "]";
        }
    };
    G96422.getGcd = function (a, b) {
        var max = Math.max(a, b);
        var min = Math.min(a, b);
        if (max % min === 0)
            return min;
        else
            return G96422.getGcd(max % min, min);
    };
    G96422.getLcm = function (a, b) {
        return a * b / G96422.getGcd(a, b);
    };
    G96422.getLcmByArr = function (arr) {
        return arr.reduce(function (previousValue, currentValue, currentIndex) {
            if (currentIndex === 0)
                return arr[0];
            else
                return G96422.getLcm(previousValue, currentValue);
        });
    };
    // こいつは配列の範囲の最小公倍数を求めていた→未使用
    G96422.smallestCommons = function (arr) {
        var range = [];
        for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
            range.push(i);
        }
        return range.reduce(function (previousValue, currentValue) {
            var gcdPrevCurr = gcd(previousValue, currentValue);
            return (previousValue * currentValue) / gcdPrevCurr;
        });
        function gcd(x, y) {
            if (y === 0)
                return x;
            else
                return gcd(y, x % y);
        }
    };
    return G96422;
}());
exports.G96422 = G96422;
// BP
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.gcd = function (a, b) {
        return b ? G964.gcd(b, a % b) : a;
    };
    G964.sumFracts = function (l) {
        if (l.length === 0)
            return null;
        var _a = l.reduce(function (_a, _b) {
            var a = _a[0], x = _a[1];
            var b = _b[0], y = _b[1];
            return [a * y + b * x, x * y];
        }), n = _a[0], d = _a[1];
        var g = G964.gcd(n, d);
        return g === d ? "" + n / d : "[" + n / g + ", " + d / g + "]";
    };
    return G964;
}());
exports.G964 = G964;
//# sourceMappingURL=6 kyu Irreducible Sum of Rationals.js.map