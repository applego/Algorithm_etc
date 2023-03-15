"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flip = void 0;
function flip(dir, arr) {
    return dir === 'L' ? arr.sort(function (a, b) { return a - b; }) : arr.sort(function (a, b) { return b - a; });
}
exports.flip = flip;
//# sourceMappingURL=8 kyu Gravity Flip.js.map