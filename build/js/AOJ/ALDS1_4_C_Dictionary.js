"use strict";
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
exports.G2 = void 0;
var DicAction = {
    Insert: 'insert',
    Find: 'find',
};
var AnswerType = {
    Yes: 'yes',
    No: 'no',
};
var G2 = /** @class */ (function () {
    function G2() {
    }
    G2.main = function (input) {
        var dictionary = {};
        var inputArr = input.split('\n');
        var n = Number(inputArr.shift());
        var result = [];
        inputArr.forEach(function (_) {
            var _a = __read(__spread(_.split(' ')), 2), dicaction = _a[0], word = _a[1];
            switch (dicaction) {
                case DicAction.Insert:
                    dictionary[word] = true;
                    break;
                case DicAction.Find:
                    console.log(dictionary[word] ? AnswerType.Yes : AnswerType.No);
                    // return dictionary[word] ? AnswerType.Yes : AnswerType.No;
                    result.push(dictionary[word] ? AnswerType.Yes : AnswerType.No);
                    break;
                default:
                    throw new Error('bad dicAction request');
            }
        });
        return result.join('\n');
    };
    return G2;
}());
exports.G2 = G2;
// * 提出用
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
// G.main(input);
//# sourceMappingURL=ALDS1_4_C_Dictionary.js.map