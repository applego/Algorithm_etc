"use strict";
// import * as fs from 'fs';
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.answer = void 0;
exports.answer = function (input) {
    var _a = __read(input.trim().split(' ').map(Number), 2), x = _a[0], y = _a[1];
    var bigger = Math.max(x, y);
    console.log(bigger);
    return bigger;
};
// const input = fs.readFileSync('/dev/stdin', 'utf8');
// answer(input);
//# sourceMappingURL=abc002A - 正直者.js.map