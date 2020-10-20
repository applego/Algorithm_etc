"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
    if (!a1 || !a2)
        return false;
    for (var _i = 0, a2_1 = a2; _i < a2_1.length; _i++) {
        var value = a2_1[_i];
        var sqrt = Math.sqrt(value);
        if (!a1.includes(sqrt))
            return false;
        else {
            var delete_idx = a1.indexOf(sqrt);
            delete a1[delete_idx];
        }
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
    var a1SortedSquared = __spreadArrays(a1).sort().map(function (n) { return Math.pow(n, 2); });
    var a2Sorted = __spreadArrays(a2).sort();
    return JSON.stringify(a1SortedSquared) === JSON.stringify(a2Sorted);
}
exports.comp_ = comp_;
//# sourceMappingURL=6 kyu Are they the "same"?.js.map