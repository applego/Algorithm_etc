"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.primeFactors_ = function (n) {
        var i = 2, count, output = '';
        while (n > 1) {
            count = 0;
            while (n % i == 0) {
                count++;
                n /= i;
            }
            switch (count) {
                case 0:
                    output += "";
                    break;
                case 1:
                    output += "(" + i + ")";
                    break;
                default: output += "(" + i + "**" + count + ")";
            }
            i++;
        }
        return output;
    };
    G964.primeFactors = function (n) {
        var i = 2, count, output = '';
        while (n > 1) {
            count = 0;
            while (n % i == 0) {
                count++;
                n /= i;
            }
            switch (count) {
                case 0: /*output += "";*/ break;
                case 1:
                    output += "(" + i + ")";
                    break;
                default:
                    output += "(" + i + "**" + count + ")";
                    break;
            }
            i++;
        }
        return output;
    };
    return G964;
}());
exports.G964 = G964;
function getFontSize(size) {
    if (size === "small") {
        return 10;
    }
    else if (size === "medium") {
        return 16;
    }
    else {
        return 24;
    }
}
//# sourceMappingURL=5 kyu Primes in numbers.js.map