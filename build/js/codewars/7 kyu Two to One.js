"use strict";
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
        var appearCharIdxes1 = s1.split('').map(function (s) { return alphaDic[s]; });
        var appearCharIdxes2 = s2.split('').map(function (s) { return alphaDic[s]; });
        var appearCharIdxesSet = new Set(appearCharIdxes1);
        for (var _i = 0, appearCharIdxes2_1 = appearCharIdxes2; _i < appearCharIdxes2_1.length; _i++) {
            var elem = appearCharIdxes2_1[_i];
            appearCharIdxesSet.add(elem);
        }
        return Object.entries(alphaDic)
            .filter(function (_a) {
            var key = _a[0], value = _a[1];
            return appearCharIdxesSet.has(value);
        })
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return key;
        })
            .join('');
    };
    G9642.longest_ = function (s1, s2) {
        var appearCharIdxes = G9642.getExistStringIndex(s1, alphaDic);
        appearCharIdxes = appearCharIdxes.concat(G9642.getExistStringIndex(s2, alphaDic));
        console.log(appearCharIdxes);
        var appearCharIdxesSet = new Set(appearCharIdxes);
        var answer = '';
        Object.entries(alphaDic).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (appearCharIdxesSet.has(value))
                answer += key;
        });
        return answer;
    };
    return G9642;
}());
exports.G9642 = G9642;
//# sourceMappingURL=7 kyu Two to One.js.map