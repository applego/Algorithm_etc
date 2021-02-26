"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
exports.recover = void 0;
var alph = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
};
// type availableLength = 3 | 4 | 5;
// const AvailableLength = {
//   3: 'three',
//   4: 'four',
//   5: 'five',
// } as const;
// type AvailableLength = typeof AvailableLength[keyof typeof AvailableLength];
// AvailableLength[3];
function recover(str) {
    //have fun ^.^
    var e_1, _a;
    var i = 0;
    var result = '';
    while (i < str.length - 1) {
        var flgFind = false;
        try {
            for (var _b = (e_1 = void 0, __values(Object.keys(alph))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var digit = _c.value;
                var tmp = str.slice(i, i + digit.length);
                if (__spread(tmp).sort().join('') === __spread(digit).sort().join('')) {
                    result += alph[digit];
                    i += digit.length - 1;
                    flgFind = true;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (!flgFind)
            i++;
    }
    return result || 'No digits found';
}
exports.recover = recover;
//# sourceMappingURL=6 kyu Digit Recovery.js.map