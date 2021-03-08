"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answer = void 0;
exports.answer = function (input) {
    // const ans = input.replace(/a|i|u|e|o/g, ''); // yarn testはpass,AtcodeのサイトだとNG
    var ans = input.split('\n')[0].replace(/[aiueo]/g, ''); //splitが肝だった../[aiueo]/の方が↑より早い
    console.log(ans);
    return ans;
};
// import * as fs from 'fs';
// const input = fs.readFileSync('/dev/stdin', 'utf8');
// answer(input);
//# sourceMappingURL=abc002B - 罠.js.map