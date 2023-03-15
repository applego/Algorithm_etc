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
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberBP = exports.number = void 0;
function number(busStops) {
    return busStops.reduce(function (numOfPeople, curr) {
        var _a = __read([curr[0], curr[1]], 2), inc = _a[0], dec = _a[1];
        return numOfPeople + inc - dec;
    }, 0);
}
exports.number = number;
function numberBP(busStops) {
    return busStops.reduce(function (rem, _a) {
        var _b = __read(_a, 2), on = _b[0], off = _b[1];
        return rem + (on - off);
    }, 0);
}
exports.numberBP = numberBP;
//# sourceMappingURL=7 kyu Number of People in the Bus.js.map