"use strict";
// const EvenOrOdd = ['Even', 'Odd'] as const;
// type typeEvenOrOdd = typeof EvenOrOdd[number];
Object.defineProperty(exports, "__esModule", { value: true });
exports.even_or_odd = void 0;
//* 参考） https:www.cyokodog.net/blog/typescript-enum-replacement/
var EvenOrOdd = {
    Even: 'Even',
    Odd: 'Odd',
};
function even_or_odd(n) {
    return n % 2 == 0 ? EvenOrOdd.Even : EvenOrOdd.Odd;
}
exports.even_or_odd = even_or_odd;
//# sourceMappingURL=8 kyu Even or Odd.js.map