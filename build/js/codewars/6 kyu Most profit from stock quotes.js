"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMostProfitFromStockQuotes = void 0;
function getMostProfitFromStockQuotes(quotes) {
    return quotes.reduce(function (acc, curr, idx, arr) {
        var m = max(arr.slice(idx));
        return acc + (m < curr ? 0 : m - curr);
    }, 0);
}
exports.getMostProfitFromStockQuotes = getMostProfitFromStockQuotes;
var max = function (quotes) {
    return quotes.reduce(function (prev, curr) {
        return Math.max(prev, curr);
    }, 0);
};
//# sourceMappingURL=6 kyu Most profit from stock quotes.js.map