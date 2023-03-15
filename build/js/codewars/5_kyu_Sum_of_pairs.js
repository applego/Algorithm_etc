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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumPairs_BP = exports.sumPairs2 = exports.sumPairs = void 0;
function sumPairs(ints, s) {
    var secondIdxOfPairs = ints.length;
    var pairs = [-1, -1];
    for (var i = 0; i < ints.length - 1; i++) {
        var curr = ints[i];
        var target = s - curr;
        var candidates = ints.slice(i + 1);
        var newSecondIdxOfPairs = i + candidates.indexOf(target);
        if (newSecondIdxOfPairs > i - 1
            && secondIdxOfPairs > newSecondIdxOfPairs) {
            pairs = [curr, target];
            secondIdxOfPairs = newSecondIdxOfPairs;
            continue;
        }
    }
    return secondIdxOfPairs === ints.length ? undefined : pairs;
}
exports.sumPairs = sumPairs;
function sumPairs2(ints, s) {
    // const intsWithoutDuplicates: number[] = Array.from(new Set(ints));
    var secondIdxOfPairs = ints.length;
    var pairs = [-1, -1];
    for (var i = 0; i < ints.length - 1; i++) {
        var curr = ints[i];
        var target = s - curr;
        // const candidates = ints.slice(i + 1);
        // const newSecondIdxOfPairs = i + candidates.indexOf(target);
        // if (newSecondIdxOfPairs > i - 1
        //   && secondIdxOfPairs > newSecondIdxOfPairs) {
        var intsWithoutDuplicates = Array.from(new Set(ints.slice(i + 1)));
        if (intsWithoutDuplicates.includes(target)) {
            var newSecondIdxOfPairs = ints.indexOf(target);
            if (newSecondIdxOfPairs < secondIdxOfPairs) {
                pairs = [curr, target];
                secondIdxOfPairs = newSecondIdxOfPairs;
                continue;
            }
        }
    }
    return secondIdxOfPairs === ints.length ? undefined : pairs;
}
exports.sumPairs2 = sumPairs2;
var hasPair = function (ints, target) {
    return ints.includes(target);
};
function sumPairs_BP(ints, s) {
    var e_1, _a;
    var seen = new Set();
    try {
        for (var ints_1 = __values(ints), ints_1_1 = ints_1.next(); !ints_1_1.done; ints_1_1 = ints_1.next()) {
            var n = ints_1_1.value;
            if (seen.has(s - n))
                return [s - n, n];
            seen.add(n);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (ints_1_1 && !ints_1_1.done && (_a = ints_1.return)) _a.call(ints_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
exports.sumPairs_BP = sumPairs_BP;
//# sourceMappingURL=5 kyu Sum of pairs.js.map