"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNeedle = void 0;
function findNeedle(haystack) {
    var strBase = 'found the needle at position ';
    var needleIdx = haystack.findIndex(function (v) { return v === 'needle'; });
    return strBase + needleIdx;
}
exports.findNeedle = findNeedle;
//# sourceMappingURL=8 kyu A Needle in the Haystack.js.map