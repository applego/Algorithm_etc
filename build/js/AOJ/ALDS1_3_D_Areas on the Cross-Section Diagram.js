"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answer = void 0;
function answer(input) {
    var array = input.trim().split('');
    var stack = [];
    var areaStack = [];
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        var p = array[i];
        var begin = undefined;
        var sumArea = undefined;
        switch (p) {
            case '\\':
                stack.push(i);
                break;
            case '/':
                if (!stack.length) {
                    continue;
                }
                begin = stack.pop();
                if (begin == undefined) {
                    continue;
                }
                sumArea = i - begin;
                sum += sumArea;
                while (true) {
                    if (!areaStack.length) {
                        break;
                    }
                    var a = areaStack.pop();
                    if (a == undefined)
                        break;
                    if (a.i >= begin) {
                        sumArea += a.area;
                    }
                    else {
                        areaStack.push(a);
                        break;
                    }
                }
                areaStack.push({
                    i: begin,
                    area: sumArea,
                });
        }
    }
    var msg = sum + '\n';
    console.log(sum);
    if (!areaStack.length) {
        msg += areaStack.length.toString();
    }
    else {
        msg += areaStack.length.toString() + ' ';
        msg += areaStack.map(function (s) { return s.area; }).join(' ');
    }
    console.log(msg);
    return msg;
}
exports.answer = answer;
// (require('fs').readFileSync('/dev/stdin', 'utf8'));
//# sourceMappingURL=ALDS1_3_D_Areas on the Cross-Section Diagram.js.map