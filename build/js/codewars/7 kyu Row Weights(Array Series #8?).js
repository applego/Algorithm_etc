"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rowWeightsBP = exports.rowWeights = void 0;
var RowWeightsCalc = /** @class */ (function () {
    function RowWeightsCalc() {
    }
    // private result: number[];
    // constructor() {
    //   this.result = [...Array(2)].map((_, i) => 0);
    // }
    RowWeightsCalc.rowWeights = function (arr) {
        var result = __spread(Array(2)).map(function (_, i) { return 0; });
        arr.forEach(function (val, idx) {
            result[idx % 2] += val;
            // if (idx % 2 === 0)
            //   result[0] += val;
            // else
            //   result[1] += val;
        });
        return result;
    };
    return RowWeightsCalc;
}());
var rowWeights = RowWeightsCalc.rowWeights;
exports.rowWeights = rowWeights;
function rowWeightsBP(arr) {
    return arr.reduce(function (r, e, i) { return (r[i % 2] += e, r); }, [0, 0]);
}
exports.rowWeightsBP = rowWeightsBP;
//# sourceMappingURL=7 kyu Row Weights(Array Series #8?).js.map