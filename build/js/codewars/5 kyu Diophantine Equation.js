"use strict";
/*
Hint:
x2 - 4 * y2 = (x - 2*y) * (x + 2*y)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.solequa = exports.solequa_timeout = void 0;
function solequa_timeout(n) {
    // y を決める
    // x2 = n + 4y2
    // n + 4y2 の平方根が整数か
    // 整数なら　x 決まる
    var answers = [];
    var y = n;
    while (y >= 0) {
        var x2 = n + 4 * (Math.pow(y, 2));
        var x = Math.sqrt(x2);
        if (Number.isInteger(x))
            answers.push([x, y]);
        y -= 1;
    }
    return answers;
}
exports.solequa_timeout = solequa_timeout;
var exp1 = function (x, y) {
    return x - Math.pow(2, y);
};
var exp2 = function (x, y) {
    return x + Math.pow(2, y);
};
function solequa(n) {
    // (x - 2*y) を決める
    /*
    (x-2*y)=D1
    (x+2*y)=D2
    
    2x = D1 + D2
    D1 * D2 = n
    
    */
    var d1 = 1;
    var answers = [];
    while (d1 <= n) {
        var d2 = n / d1;
        if (!Number.isInteger(d2)) {
            d1 += 1;
            continue;
        }
        var x = (d1 + d2) / 2;
        if (x < 0)
            break;
        if (!Number.isInteger(x)) {
            d1 += 1;
            continue;
        }
        var y = (d2 - x) / 2;
        if (y < 0)
            break;
        if (!Number.isInteger(y)) {
            d1 += 1;
            continue;
        }
        answers.push([x, y]);
        d1 += 1;
    }
    return answers;
}
exports.solequa = solequa;
//# sourceMappingURL=5 kyu Diophantine Equation.js.map