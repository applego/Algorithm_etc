"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateCount_ = exports.duplicateCount = void 0;
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
function duplicateCount_(text) {
    var lowercaseText = text.toLocaleLowerCase();
    var set = new Set(lowercaseText);
    var textArray = __spreadArrays(lowercaseText);
    return __spreadArrays(set).reduce(function (accumulator, value) {
        var characterCount = textArray.filter(function (character) { return character === value; }).length;
        if (characterCount > 1) {
            return accumulator + 1;
        }
        return accumulator;
    }, 0);
}
exports.duplicateCount_ = duplicateCount_;
//# sourceMappingURL=6 kyu Counting Duplicates.js.map