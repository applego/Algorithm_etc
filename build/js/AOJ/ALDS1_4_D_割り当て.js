"use strict";
/**
 * n,k,wi
 * 最大積載量Pの最小値を求める
 *
 * Pを渡して、積める個数vを返す関数
 * v = f(P)
 * このvがn以上になればOK
 *
 * Pを1ずつ増やすだと計算量はPn
 *
 * だがPを増やしたときに、vが減ることはないので
 * 二部探索する Pを
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.G3 = void 0;
var G3 = /** @class */ (function () {
    function G3() {
    }
    G3.main = function (input) {
        var _a;
        var inputArr = input.split('\n');
        var firstLine = (_a = inputArr.shift()) === null || _a === void 0 ? void 0 : _a.split(' ').map(Number);
        if (!firstLine)
            throw new Error('firstLine was undefined');
        var _b = __read([firstLine[0], firstLine[1]], 2), cntPackage = _b[0], cntTrack = _b[1];
        var arrPackageWeight = inputArr.slice().map(Number);
        var sum = arrPackageWeight.reduce(function (acc, curr) {
            return acc + curr;
        }, 0);
        var ave = Math.floor(sum / cntTrack);
        var left = ave / 2;
        var right = ave * 2;
        while (right - left > 1) {
            var mid = Math.floor((left + right) / 2);
            var loader = new Loader(arrPackageWeight, cntTrack);
            var ccp = loader.CapableCntOfPackage(mid);
            if (ccp >= cntPackage)
                right = mid;
            else
                left = mid;
        }
        return right;
    };
    return G3;
}());
exports.G3 = G3;
var Loader = /** @class */ (function () {
    function Loader(arrPackageWeight, cntTrack) {
        this.arrPackageWeight = arrPackageWeight;
        this.cntTrack = cntTrack;
    }
    Loader.prototype.CapableCntOfPackage = function (P) {
        var capableCntOfPackage = 0;
        var ip = 0;
        for (var it_1 = 0; it_1 < this.cntTrack; it_1++) {
            var track = new Track(P, 0);
            for (; ip < this.arrPackageWeight.length; ip++) {
                var pweight = this.arrPackageWeight[ip];
                if (track.canLoad(pweight)) {
                    track.load(pweight);
                    capableCntOfPackage++;
                }
                else {
                    break;
                }
            }
        }
        return capableCntOfPackage;
    };
    return Loader;
}());
// interface Car{
//   private engine: boolean;
//   private taiya: string;
//   private engineOn(): void;
// }
var Track = /** @class */ (function () {
    function Track(maxWeight, currentWeight) {
        if (currentWeight === void 0) { currentWeight = 0; }
        this.maxWeight = maxWeight;
        this.currentWeight = currentWeight;
    }
    Track.prototype.canLoad = function (packweight) {
        return this.currentWeight + packweight <= this.maxWeight;
    };
    Track.prototype.load = function (packweight) {
        this.currentWeight += packweight;
    };
    return Track;
}());
// * 提出用
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
// G3.main(input);
//# sourceMappingURL=ALDS1_4_D_割り当て.js.map