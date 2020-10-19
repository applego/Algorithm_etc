"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 拡張メソッドの実装側
Number.prototype.fizzBuzz = function () {
    var num = this.valueOf();
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
    }
    else if (num % 3 === 0) {
        return 'fizz';
    }
    else if (num % 5 === 0) {
        return 'buzz';
    }
    else {
        return num.toString();
    }
};
//# sourceMappingURL=number.extensions.js.map