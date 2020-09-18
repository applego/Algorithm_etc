"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIsogram = void 0;
var isNumber = function (value) {
    return ((typeof value === 'number') && (isFinite(value)));
};
var isNumberableString = function (value) {
    var parsed = parseInt(value);
    return !isNaN(parsed);
};
function isIsogram(str) {
    console.info(str);
    var charCounter = {};
    var arrayStr = str.toLowerCase().split('');
    for (var i = 0; i < arrayStr.length; i++) {
        var c = arrayStr[i];
        if (isNumberableString(c))
            return false;
        if (charCounter[c]) {
            charCounter[c] += 1;
            return false;
        }
        charCounter[c] = 1;
    }
    return true;
}
exports.isIsogram = isIsogram;
// 省略可能な引数は?を使う
// export function f2(x: number, y: string = '円'): string {
//     return x.toLocaleString() + y;
// }
//# sourceMappingURL=7 kyu Isograms.js.map