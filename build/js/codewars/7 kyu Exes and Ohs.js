"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xo = void 0;
// xとoが同じ数か
function xo(str) {
    var cntx = (str.match(/x/ig) || []).length;
    var cnto = (str.match(/o/ig) || []).length;
    return cntx === cnto;
}
exports.xo = xo;
//# sourceMappingURL=7 kyu Exes and Ohs.js.map