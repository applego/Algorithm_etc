'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require('assert');
var Test = /** @class */ (function () {
    function Test(questionname) {
        this.questionname = questionname;
    }
    Test.expect = function (isCorrect, msg) {
        if (isCorrect)
            console.log('Correct');
        else {
            console.log(msg);
        }
    };
    Test.assert_equals = function (a, b, msg) {
        try {
            assert.deepEqual(a, b);
            console.log('○---Correct');
        }
        catch (e) {
            if (msg) {
                console.log(msg);
            }
            else {
                console.log('✕---Error');
            }
            console.log('ans :' + a);
            console.log('exp :' + b);
        }
    };
    Test.assert_equals_param_func = function (func, n, expected) {
        this.assert_equals(func(n), expected);
    };
    return Test;
}());
exports.default = Test;
//# sourceMappingURL=TestCodewar.js.map