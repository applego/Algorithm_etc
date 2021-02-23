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
Object.defineProperty(exports, "__esModule", { value: true });
exports.G9642 = void 0;
;
var alphaDic = {};
"abcdefghijklmnopqrstuvwxyz"
    .split('')
    .forEach(function (value, index) {
    alphaDic[value] = index;
});
var G9642 = /** @class */ (function () {
    function G9642() {
    }
    G9642.getExistStringIndex = function (s, dic) {
        return s.split('')
            .map(function (s) { return dic[s]; });
    };
    G9642.longest = function (s1, s2) {
        var e_1, _a;
        var appearCharIdxes1 = s1.split('').map(function (s) { return alphaDic[s]; });
        var appearCharIdxes2 = s2.split('').map(function (s) { return alphaDic[s]; });
        var appearCharIdxesSet = new Set(appearCharIdxes1);
        try {
            for (var appearCharIdxes2_1 = __values(appearCharIdxes2), appearCharIdxes2_1_1 = appearCharIdxes2_1.next(); !appearCharIdxes2_1_1.done; appearCharIdxes2_1_1 = appearCharIdxes2_1.next()) {
                var elem = appearCharIdxes2_1_1.value;
                appearCharIdxesSet.add(elem);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (appearCharIdxes2_1_1 && !appearCharIdxes2_1_1.done && (_a = appearCharIdxes2_1.return)) _a.call(appearCharIdxes2_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return Object.entries(alphaDic) // es2017以降？
            .filter(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            return appearCharIdxesSet.has(value);
        })
            .map(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            return key;
        })
            .join('');
        // 提出 ver
        return Object.keys(alphaDic)
            .map(function (key) {
            if (appearCharIdxesSet.has(alphaDic[key]))
                return key;
            //             answer += key;
        })
            .join('');
        // const appearCharIdxesSum = appearCharIdxes1.concat(appearCharIdxes2).filter((value, index, array) => array.indexOf(value) === index);
        // appearCharIdxesSum.includes()
    };
    G9642.longest_ = function (s1, s2) {
        var appearCharIdxes = G9642.getExistStringIndex(s1, alphaDic);
        appearCharIdxes = appearCharIdxes.concat(G9642.getExistStringIndex(s2, alphaDic));
        console.log(appearCharIdxes);
        var appearCharIdxesSet = new Set(appearCharIdxes);
        var answer = '';
        Object.entries(alphaDic).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            if (appearCharIdxesSet.has(value))
                answer += key;
        });
        return answer;
    };
    // BP これでいいんかい
    G9642.longest_bp = function (s1, s2) {
        return Array.from(new Set(Array.from(s1 + s2))).sort().join('');
    };
    return G9642;
}());
exports.G9642 = G9642;
//# sourceMappingURL=7 kyu Two to One.js.map