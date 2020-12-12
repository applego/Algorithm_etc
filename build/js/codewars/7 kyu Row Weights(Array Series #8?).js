"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rowWeights = void 0;
var RowWeightsCalc = /** @class */ (function () {
    function RowWeightsCalc() {
    }
    // private arrResult: number[];
    // constructor() {
    //   this.arrResult = [...Array(2)].map((_, i) => 0);
    // }
    RowWeightsCalc.rowWeights = function (arr) {
        var arrResult = __spreadArrays(Array(2)).map(function (_, i) { return 0; });
        arr.forEach(function (val, idx) {
            if (idx % 2 === 0)
                arrResult[0] += val;
            else
                arrResult[1] += val;
        });
        return arrResult;
    };
    return RowWeightsCalc;
}());
var rowWeights = RowWeightsCalc.rowWeights;
exports.rowWeights = rowWeights;
//# sourceMappingURL=7 kyu Row Weights(Array Series #8?).js.map