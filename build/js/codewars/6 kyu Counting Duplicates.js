"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateCount = void 0;
function duplicateCount(text) {
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
    for (var _i = 0, _a = Object.keys(sCounter); _i < _a.length; _i++) {
        var k = _a[_i];
        if (sCounter[k] >= 2)
            cnt_over_twice++;
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