"use strict";
// const part = (n: number, animal: string): string => {
//   return `${n} ${animal}...`;
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSheep = void 0;
// export function countSheep(num: number): string {
//   // [...Array(num).keys()].map(i => ++i)
//   // [...Array.from(num)].map(i=>++i)
//   //   .reduce((acc, curr) => {
//   //   return part(curr, 'sheep');
//   // })
//   // return '';
//   let result: string = '';
//   for (let i = 1; i < num + 1; i++) {
//     result += part(i, 'sheep');
//   }
//   return result;
// }
function countSheep(num) {
    var part = function (n, animal) {
        return n + " " + animal + "...";
    };
    var result = '';
    for (var i = 1; i < num + 1; i++) {
        result += part(i, 'sheep');
    }
    return result;
}
exports.countSheep = countSheep;
//# sourceMappingURL=8 kyu If you can't sleep, just count sheep.js.map