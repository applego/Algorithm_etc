"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOdd = void 0;
exports.findOdd = function (xs) {
    // happy coding!
    var numCounter = {};
    xs.forEach(function (x) {
        if (numCounter[x])
            numCounter[x]++;
        else
            numCounter[x] = 1;
    });
    for (var _i = 0, _a = Object.entries(numCounter); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], count = _b[1];
        if (count % 2 === 1)
            return parseInt(key);
    }
    return -1;
    // return Object.values(numCounter).filter(x => x % 2 === 1)[0];
};
//# sourceMappingURL=6 kyu Find the odd int.js.map