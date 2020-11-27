"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayLeaders = exports.arrayLeaders1 = void 0;
function arrayLeaders1(numbers) {
    var list = [];
    for (var i = 1; i < numbers.length; i++) {
        var sum = numbers
            .slice(i)
            .reduce(function (acc, v) { return acc + v; });
        list.push({ n: numbers[i - 1], sum: sum });
    }
    return list.filter(function (l) { return l.n > l.sum; }).map(function (l) { return l.n; });
}
exports.arrayLeaders1 = arrayLeaders1;
function arrayLeaders(numbers) {
    var leaders = [];
    for (var i = 1; i < numbers.length; i++) {
        var sum = numbers
            .slice(i)
            .reduce(function (acc, v) { return acc + v; });
        if (numbers[i - 1] > sum)
            leaders.push(numbers[i - 1]);
    }
    if (numbers[numbers.length - 1] > 0)
        leaders.push(numbers[numbers.length - 1]);
    return leaders;
}
exports.arrayLeaders = arrayLeaders;
//# sourceMappingURL=7 kyu Array Leaders (Array Series #3).js.map