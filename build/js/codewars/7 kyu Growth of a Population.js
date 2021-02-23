"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964_20210222 = void 0;
var G964_20210222 = /** @class */ (function () {
    function G964_20210222() {
    }
    G964_20210222.nbYear = function (p0, percent, aug, p) {
        // x年後の人口
        /**
         1年後
         p0 * (1+percent)+aug
         2年後
         一年前 * (1+percent)+aug
         */
        if (p0 >= p)
            return 0;
        // let xyear: number = 0;
        var xyear = 1;
        var pNow = p0 * (1 + percent / 100) + aug;
        // xyear++;
        while (pNow < p) {
            pNow = pNow * (1 + percent / 100) + aug;
            xyear++;
        }
        return xyear;
    };
    return G964_20210222;
}());
exports.G964_20210222 = G964_20210222;
//# sourceMappingURL=7 kyu Growth of a Population.js.map