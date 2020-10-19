"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comp = exports.fizzBuzzOutput = void 0;
// 呼び出したい拡張メソッドをimport
require("../templates/number.extensions");
function fizzBuzzOutput(num) {
    for (var i = 0; i < num; i++) {
        // number型の拡張メソッドfizzBuzzが利用できるようになる
        console.log("" + i.fizzBuzz());
    }
}
exports.fizzBuzzOutput = fizzBuzzOutput;
// ↑TSの拡張メソッドの呼び出し側
function comp(a1, a2) {
    // your code
    // a2の要素のsquaresがa1に存在するか
    // anyで一つでも存在しない要素があったらfalse, すべて存在したらtrue
    return true;
}
exports.comp = comp;
//# sourceMappingURL=6 kyu Are they the "same"?.js.map