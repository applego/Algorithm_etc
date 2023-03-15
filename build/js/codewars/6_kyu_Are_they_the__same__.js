"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
exports.comp_ = exports.comp = exports.fizzBuzzOutput = void 0;
// 呼び出したい拡張メソッドをimport
require("../templates/number.extensions");
function fizzBuzzOutput(num) {
    for (var i = 0; i < num; i++) {
        // number型の拡張メソッドfizzBuzzが利用できるようになる
        console.log("" + i.fizzBuzz());
    }
}
exports.fizzBuzzOutput = fizzBuzzOutput;
// ↑TSの拡張メソッドの呼び出し側（問題と無関係）
function comp(a1, a2) {
    var e_1, _a;
    if (!a1 || !a2)
        return false;
    try {
        for (var a2_1 = __values(a2), a2_1_1 = a2_1.next(); !a2_1_1.done; a2_1_1 = a2_1.next()) {
            var value = a2_1_1.value;
            var sqrt = Math.sqrt(value);
            if (!a1.includes(sqrt))
                return false;
            else {
                var delete_idx = a1.indexOf(sqrt);
                delete a1[delete_idx];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (a2_1_1 && !a2_1_1.done && (_a = a2_1.return)) _a.call(a2_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return true;
    // your code
    // a2の要素のsquaresがa1に存在するか
    // anyで一つでも存在しない要素があったらfalse, すべて存在したらtrue
    // localだとtest通ったけど、CodeWarsでやったらコンパイルエラー...でもこのロジックは足りない
    return true === (a2 === null || a2 === void 0 ? void 0 : a2.every(function (value) { return a1 === null || a1 === void 0 ? void 0 : a1.includes(Math.sqrt(value)); }));
}
exports.comp = comp;
// BP
function comp_(a1, a2) {
    if (!(a1 && a2) || a1.length !== a2.length)
        return false;
    var a1SortedSquared = __spread(a1).sort().map(function (n) { return Math.pow(n, 2); });
    var a2Sorted = __spread(a2).sort();
    return JSON.stringify(a1SortedSquared) === JSON.stringify(a2Sorted);
}
exports.comp_ = comp_;
//# sourceMappingURL=6 kyu Are they the "same"?.js.map