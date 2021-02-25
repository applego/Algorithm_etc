"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answer = void 0;
function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length;
    while (left < right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return 1;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return 0;
}
exports.answer = function (input) {
    var lines = input.trim().split('\n');
    var arrS = lines[1].split(' ').map(Number);
    var arrT = lines[3].split(' ').map(Number);
    var sum = arrT.reduce(function (acc, curr) {
        return acc + binarySearch(arrS, curr);
    }, 0);
    return sum.toString();
};
// * 提出用
// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length;
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//       return 1;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }
//   return 0;
// }
// (function (input) {
//   const lines = input.trim().split('\n');
//   const arrS = lines[1].split(' ').map(Number);
//   const arrT = lines[3].split(' ').map(Number);
//   const sum = arrT.reduce((acc, curr) => {
//     return acc + binarySearch(arrS, curr);
//   }, 0);
//   console.log(sum);
// })(require('fs').readFileSync('/dev/stdin', 'utf8'));
//# sourceMappingURL=ALDS1_4_B_二分探索.js.map