"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSmallestInt = void 0;
function findSmallestInt(args) {
    return args.reduce(function (min, val) {
        return Math.min(min, val);
    });
}
exports.findSmallestInt = findSmallestInt;
//# sourceMappingURL=8 kyu Find the smallest integer in the array.js.map