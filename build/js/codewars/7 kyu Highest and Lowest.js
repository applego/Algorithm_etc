"use strict";
function highAndLow(numbers) {
    // ...
    ary = numbers.split(' ').map(function (e) { return parseInt(e, 10); });
    var aryMax = function (a, b) { return Math.max(a, b); };
    var aryMin = function (a, b) { return Math.min(a, b); };
    var max = ary.reduce(aryMax);
    var min = ary.reduce(aryMin);
    return max + " " + min;
}
//# sourceMappingURL=7 kyu Highest and Lowest.js.map