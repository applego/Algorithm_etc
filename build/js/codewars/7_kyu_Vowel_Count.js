"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata4 = exports.Kata3 = exports.Kata2 = exports.Kata = void 0;
var vowels = ['a', 'i', 'u', 'e', 'o'];
var Kata = /** @class */ (function () {
    function Kata() {
    }
    // set vowels
    Kata.getCount = function (str) {
        return str.split('').filter(function (s) { return vowels.indexOf(s) > -1; }).length;
        // let cnt: number = 0;
        // for (const s of str) {
        //     console.log(s);
        //     if (vowels.indexOf(s) > -1) {
        //         cnt += 1;
        //     }
        // }
        // return cnt;
        var cnt3 = str.split('').reduce(function (acc, s) {
            return acc + (vowels.indexOf(s) > -1 ? 1 : 0);
        });
        // const cnt4 = str.split('').flatMap((s) =>)
    };
    return Kata;
}());
exports.Kata = Kata;
//BP
var Kata2 = /** @class */ (function () {
    function Kata2() {
    }
    Kata2.getCount = function (str) {
        var list = str.match(/[aeiou]/gi);
        return list ? list.length : 0;
    };
    return Kata2;
}());
exports.Kata2 = Kata2;
var Kata3 = /** @class */ (function () {
    function Kata3() {
    }
    Kata3.getCount = function (str) {
        return str.replace(/[^aeiou]/gi, '').length;
    };
    return Kata3;
}());
exports.Kata3 = Kata3;
var Kata4 = /** @class */ (function () {
    function Kata4() {
    }
    Kata4.getCOunt = function (str) {
        return (str.match(/[aeiou]/ig) || []).length;
    };
    return Kata4;
}());
exports.Kata4 = Kata4;
//# sourceMappingURL=7 kyu Vowel Count.js.map