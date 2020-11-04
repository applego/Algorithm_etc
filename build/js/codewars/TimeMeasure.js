'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var performance = require('perf_hooks').performance;
var TimeMeasure = /** @class */ (function () {
    function TimeMeasure() {
    }
    TimeMeasure.measure = function (name, func) {
        var start = performance.now();
        func();
        var end = performance.now();
        var elapsed = (end - start);
        var elapsedStr = elapsed.toPrecision(3);
        console.log(name + ": " + elapsedStr);
    };
    return TimeMeasure;
}());
exports.default = TimeMeasure;
//# sourceMappingURL=TimeMeasure.js.map