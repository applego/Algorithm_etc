"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964_20210217 = void 0;
var G964_20210217 = /** @class */ (function () {
    function G964_20210217() {
    }
    G964_20210217.mxdiflg = function (a1, a2) {
        if (a1.length === 0 || a2.length === 0)
            return -1;
        var max1 = 0;
        var min1 = Number.MAX_VALUE;
        a1.forEach(function (v) {
            if (v.length > max1)
                max1 = v.length;
            if (v.length < min1)
                min1 = v.length;
        });
        var max2 = 0;
        var min2 = Number.MAX_VALUE;
        a2.forEach(function (v) {
            if (v.length > max2)
                max2 = v.length;
            if (v.length < min2)
                min2 = v.length;
        });
        return Math.max(Math.abs(max1 - min2), Math.abs(max2 - min1));
    };
    return G964_20210217;
}());
exports.G964_20210217 = G964_20210217;
//# sourceMappingURL=7 kyu Maximum Length Difference.js.map