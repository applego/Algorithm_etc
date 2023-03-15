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
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964_20210130 = exports.G964_20210130_t = exports.G964_20210130_BP = void 0;
// BP
var G964_20210130_BP = /** @class */ (function () {
    function G964_20210130_BP() {
    }
    G964_20210130_BP.productFib = function (prod) {
        var _a;
        var p1 = 1, p2 = 1;
        while (p1 * p2 < prod)
            _a = __read([p2, p1 + p2], 2), p1 = _a[0], p2 = _a[1];
        return [p1, p2, (p1 * p2 == prod)];
    };
    return G964_20210130_BP;
}());
exports.G964_20210130_BP = G964_20210130_BP;
var G964_20210130_t = /** @class */ (function () {
    function G964_20210130_t() {
    }
    G964_20210130_t.fibonaccies = {};
    G964_20210130_t.productFib = function (prod) {
        var fibonacci = function (n) {
            if (n === 0)
                return 0;
            if (n === 1)
                return 1;
            if (G964_20210130_t.fibonaccies[n] != null) {
                return G964_20210130_t.fibonaccies[n];
            }
            return fibonacci(n - 1) + fibonacci(n - 2);
        };
        G964_20210130_t.fibonaccies[0] = 0;
        G964_20210130_t.fibonaccies[1] = 1;
        var m = 0;
        while (true) {
            var mFib = fibonacci(m);
            if (G964_20210130_t.fibonaccies[m] == null)
                G964_20210130_t.fibonaccies[m] = mFib;
            var m1Fib = fibonacci(m + 1);
            if (G964_20210130_t.fibonaccies[m + 1] == null)
                G964_20210130_t.fibonaccies[m + 1] = m1Fib;
            var productFib = mFib * m1Fib;
            if (productFib === prod)
                return [mFib, m1Fib, true];
            if (productFib > prod)
                return [mFib, m1Fib, false];
            m++;
        }
    };
    return G964_20210130_t;
}());
exports.G964_20210130_t = G964_20210130_t;
var G964_20210130 = /** @class */ (function () {
    function G964_20210130() {
    }
    G964_20210130.productFib = function (prod) {
        var fibonacci = function (n) {
            if (n === 0)
                return 0;
            if (n === 1)
                return 1;
            return fibonacci(n - 1) + fibonacci(n - 2);
            // * ↓ cacheが別れてしまう
            // return G964_20210130.cache(fibonacci)(n - 1) + G964_20210130.cache(fibonacci)(n - 2);
        };
        var cachedFibonacci = G964_20210130.cache(fibonacci);
        // let dic: Dictionary = {};
        // dic[0] = 0;
        // dic[1] = 1;
        // fibonacciで F(m) F(m+1)の掛け算をしていき、prodを超えたら false
        var m = 0;
        while (true) {
            var mFib = cachedFibonacci(m);
            var m1Fib = cachedFibonacci(m + 1);
            var productFib = mFib * m1Fib;
            if (productFib === prod)
                return [mFib, m1Fib, true];
            if (productFib > prod)
                return [mFib, m1Fib, false];
            m++;
        }
    };
    G964_20210130.cache = function (func) {
        var fibonaccies = {};
        // fibonaccies[0] = 0;
        // fibonaccies[1] = 1;
        return function () {
            var key = Number(arguments[0]);
            if (fibonaccies[key] == null) {
                fibonaccies[key] = func.apply(null, [key]);
            }
            return fibonaccies[key];
        };
    };
    return G964_20210130;
}());
exports.G964_20210130 = G964_20210130;
// export class G964_20210130 {
//   public static productFib: [number, number, boolean] = (prod: number) => {
//   }
//   private static fibonacci: number = (n: number) => {
//     const fibonacci = G964_20210130.cacheFib(G964_20210130.fibonacci(n))
//     const ret = G964_20210130.cacheFib()
//   }
//   private static cacheFib = (func: (n: number) => number) => {
//     let fibonaccies: Dictionary = {};
//     return function () {
//       const key = Number(JSON.stringify(arguments));
//       if (!fibonaccies[key])
//         fibonaccies[key] = func.apply(null, [key]);
//       return fibonaccies[key];
//     }
//   }
// }
// * cache 参考　js
// function cache(func) {
//   let calls = {};
//   return function () {
//     let key = JSON.stringify(arguments);
//     if (!(key in calls)) {
//       calls[key] = func.apply(null, arguments);
//     }
//     return calls[key];
//   };
// }
// let complexFunction = function (arg1, arg2) {
//       if (arg1 < arg2)
//         return arg2;
//       else
//         return arg1;
//     };
//     let cachedFunction = cache(complexFunction);
//     let ans1 = cachedFunction('foo', 'bar');
//     let ans2 = cachedFunction('foo', 'bar');
//     let ans3 = cachedFunction('foo', 'baz');
//     assert.strictEqual(ans1, ans2);
// assert.notEqual(ans1, ans3);
//# sourceMappingURL=5 kyu Product of consecutive Fib numbers.js.map