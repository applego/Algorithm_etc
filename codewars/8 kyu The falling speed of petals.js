"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sakuraFall3 = exports.sakuraFall2 = exports.f2 = exports.f = exports.sakuraFall = void 0;
function sakuraFall(v) {
    if (v <= 0)
        return 0;
    var distance_cm = 5 * 80;
    console.info(distance_cm / v);
    return distance_cm / v;
}
exports.sakuraFall = sakuraFall;
// sakuraFall(5);
// sakuraFall(10);
// sakuraFall(-1);
// sakuraFall(0);
// console.log("sakuraFall");
// 引数・戻り値に型を定義する(省略しても可)
function f(x) {
    return x.toLocaleString() + '円';
}
exports.f = f;
// 省略可能な引数は?を使う
function f2(x, y) {
    if (y === void 0) { y = '円'; }
    return x.toLocaleString() + y;
}
exports.f2 = f2;
//solutions
exports.sakuraFall2 = function (v) { return v > 0 ? 400 / v : 0; };
//solutions2
exports.sakuraFall3 = function (v) {
    return v > 0 ? 400 / v : 0;
};
//# sourceMappingURL=8 kyu The falling speed of petals.js.map

//?↑ TypeScriptで自動生成
function sakuraFall(v) {
    return v > 0 ? 400 / v : 0;
}