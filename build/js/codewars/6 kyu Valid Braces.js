"use strict";
//()[]{}
Object.defineProperty(exports, "__esModule", { value: true });
exports.validBraces = void 0;
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
    var cnt_1 = 0; //()
    var cnt_2 = 0; //[]
    var cnt_3 = 0; //{}
    braces.split('').forEach(function (s) {
        switch (s) {
            case '(':
                cnt_1 += 1;
                break;
            case ')':
                cnt_1 -= 1;
                break;
            case '[':
                cnt_2 += 1;
                break;
            case ']':
                cnt_2 -= 1;
                break;
            case '{':
                cnt_3 += 1;
                break;
            case '}':
                cnt_3 -= 1;
                break;
            default:
                console.log('error');
                break;
        }
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
    });
    return cnt_1 === 0 && cnt_2 === 0 && cnt_3 === 0;
}
exports.validBraces = validBraces;
//# sourceMappingURL=6 kyu Valid Braces.js.map