"use strict";
//()[]{}
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = exports.validBraces = void 0;
function validBraces(braces) {
    while (true) {
        var isReplaced = false;
        if (braces.indexOf('()') > -1) {
            braces = braces.replace('()', '');
            isReplaced = true;
        }
        if (braces.indexOf('[]') > -1) {
            braces = braces.replace('[]', '');
            isReplaced = true;
        }
        if (braces.indexOf('{}') > -1) {
            braces = braces.replace('{}', '');
            isReplaced = true;
        }
        if (!isReplaced)
            break;
    }
    console.log(braces);
    return braces.length === 0;
    // let cnt_1: number = 0 //()
    // let cnt_2: number = 0 //[]
    // let cnt_3: number = 0 //{}
    // braces.split('').forEach(s => {
    //   switch (s) {
    //     case '(':
    //       cnt_1 += 1;
    //       break;
    //     case ')':
    //       cnt_1 -= 1;
    //       break;
    //     case '[':
    //       cnt_2 += 1;
    //       break;
    //     case ']':
    //       cnt_2 -= 1;
    //       break;
    //     case '{':
    //       cnt_3 += 1;
    //       break;
    //     case '}':
    //       cnt_3 -= 1;
    //       break;
    //     default:
    //       console.log('error');
    //       break;
    //   }
    // if (s === '(')
    //   cnt_1 += 1;
    // else if (s === ')')
    //   cnt_1 -= 1;
    // else if (s === '[')
    //   cnt_2 += 1;
    // else if (s === ']')
    //   cnt_2 -= 1;
    // else if (s === '{')
    //   cnt_3 += 1;
    // else if (s === '}')
    //   cnt_3 -= 1;
    // else
    //     console.log('error');
    // })
    // return cnt_1 === 0 && cnt_2 === 0 && cnt_3 === 0;
}
exports.validBraces = validBraces;
//BP 正規表現でいけたか　/\(\)|\{\}|\[\]/g
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.validBraces = function (braces) {
        // TODO
        var result = braces;
        while (result.match(completeBracketRegEx)) {
            result = Challenge.RemoveMatchingBrackets(result);
        }
        return !result.length;
    };
    Challenge.RemoveMatchingBrackets = function (str) {
        return str.replace(completeBracketRegEx, '');
    };
    return Challenge;
}());
exports.Challenge = Challenge;
var completeBracketRegEx = /\(\)|\{\}|\[\]/g;
//# sourceMappingURL=6 kyu Valid Braces.js.map