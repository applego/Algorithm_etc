"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
var vowels = ['a', 'i', 'u', 'e', 'o'];
var Kata = /** @class */ (function () {
    function Kata() {
    }
    // set vowels
    Kata.getCount = function (str) {
        var cnt = 0;
        for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
            var s = str_1[_i];
            console.log(s);
            if (vowels.indexOf(s) > -1) {
                cnt += 1;
            }
        }
        return cnt;
        var cnt2 = str.split('').filter(function (s) { return vowels.indexOf(s) > -1; }).length;
        var cnt3 = str.split('').reduce(function (acc, s) {
            return acc + (vowels.indexOf(s) > -1 ? 1 : 0);
        });
        // const cnt4 = str.split('').flatMap((s) =>)
    };
    return Kata;
}());
exports.Kata = Kata;
//# sourceMappingURL=7 kyu Vowel Count.js.map

//? ↑Typescriptから自動生成（笑）

function getCount(str) {
    const list = str.match(/[aeiou]/gi);
    return list ? list.length : 0;
    // return str.split('').filter(function (s) { return vowels.indexOf(s) > -1; }).length;
}