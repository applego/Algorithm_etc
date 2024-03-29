"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964_BP = exports.G964 = void 0;
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.isCdi = function (x, y) {
        return x % y === 0;
    };
    G964.gcdi = function (x, y) {
        // your code　最大公約数
        var xabs = Math.abs(x);
        var yabs = Math.abs(y);
        var lower = Math.min(xabs, yabs);
        var bigger = Math.max(xabs, yabs);
        var i = lower;
        while (!(G964.isCdi(bigger, i) && G964.isCdi(lower, i))) {
            i--;
        }
        return i;
    };
    G964.isCmu = function (lower, bigger) {
        // lowerがbiggerの公倍数かどうか
        var i = 1;
        while (lower * i <= bigger) {
            if (bigger % (lower * i) === 0) {
                return true;
            }
            i++;
        }
        return false;
    };
    G964.lcmu = function (a, b) {
        // your code　最小公倍数
        var xabs = Math.abs(a);
        var yabs = Math.abs(b);
        var lower = Math.min(xabs, yabs);
        var bigger = Math.max(xabs, yabs);
        var i = 1;
        while (!G964.isCmu(lower, bigger * i)) {
            i++;
        }
        return bigger * i;
    };
    G964.som = function (a, b) {
        // your code
        return a + b;
    };
    G964.maxi = function (a, b) {
        // your code
        return Math.max(a, b);
    };
    G964.mini = function (a, b) {
        // your code
        return Math.min(a, b);
    };
    G964.operArray = function (fct, arr, init) {
        var arrAnswer = [];
        for (var i = 0; i < arr.length; i++) {
            if (i === 0) {
                arrAnswer.push(fct(init, arr[0]));
            }
            else {
                arrAnswer.push(fct(arrAnswer[i - 1], arr[i]));
            }
        }
        return arrAnswer;
        // return arr.map((val, idx, arr) => {
        //   if (idx === arr.length - 1)
        //   return fct(val, arr[idx + 1]);
        // });
    };
    return G964;
}());
exports.G964 = G964;
var G964_BP = /** @class */ (function () {
    function G964_BP() {
    }
    G964_BP.gcdi = function (x, y) {
        x = Math.abs(x);
        y = Math.abs(y);
        while (y !== 0) {
            var t = x;
            x = y;
            y = t % y;
        }
        return x;
    };
    G964_BP.lcmu = function (a, b) {
        return Math.abs(a * b) / G964.gcdi(a, b);
    };
    G964_BP.som = function (a, b) {
        return a + b;
    };
    G964_BP.maxi = function (a, b) {
        return Math.max(a, b);
    };
    G964_BP.mini = function (a, b) {
        return Math.min(a, b);
    };
    G964_BP.operArray = function (fct, arr, init) {
        return arr.map(function (u) {
            init = fct(init, u);
            return init;
        });
    };
    return G964_BP;
}());
exports.G964_BP = G964_BP;
//# sourceMappingURL=6 kyu Reducing by steps.js.map