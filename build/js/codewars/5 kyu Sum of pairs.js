"use strict";
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
    var seen = new Set();
    for (var _i = 0, ints_1 = ints; _i < ints_1.length; _i++) {
        var n = ints_1[_i];
        if (seen.has(s - n))
            return [s - n, n];
        seen.add(n);
    }
}
exports.sumPairs_BP = sumPairs_BP;
//# sourceMappingURL=5 kyu Sum of pairs.js.map