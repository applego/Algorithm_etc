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
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateCount = void 0;
function duplicateCount(text) {
    var e_1, _a;
    //配列化　小文字化
    var lowercase = text.toLowerCase();
    // let count
    var sCounter = {};
    lowercase.split('').forEach(function (s) {
        if (sCounter[s] != null) {
            sCounter[s] += 1;
        }
        else {
            sCounter[s] = 1;
        }
    });
    //出現カウント
    //2回以上出現した文字のカウント
    var cnt_over_twice = 0; //sCounter.filter()
    try {
        for (var _b = __values(Object.keys(sCounter)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var k = _c.value;
            if (sCounter[k] >= 2)
                cnt_over_twice++;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return cnt_over_twice;
}
exports.duplicateCount = duplicateCount;
//BP
//error https://stackoverflow.com/questions/49218765/typescript-and-iterator-type-iterableiteratort-is-not-an-array-type
// export function duplicateCount_(text: string): number{
//   const lowercaseText = text.toLocaleLowerCase();
//   const set = new Set(lowercaseText);
//   const textArray = [...lowercaseText];
//   return [...set].reduce((accumulator, value) => {
//       const characterCount = textArray.filter((character) => character === value).length;
//       if (characterCount > 1) {
//           return accumulator + 1;
//       }
//       return accumulator
//   }, 0);
// }
//# sourceMappingURL=6 kyu Counting Duplicates.js.map