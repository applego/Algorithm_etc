"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wallpaper = void 0;
function wallpaper(l, w, h) {
    // your code
    var numbers = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty',
    ];
    var onerollArea = 0.52 * 10;
    var additionalRate = 1.15;
    var wallArea = 2 * h * (l + w);
    var rollCnt = Math.ceil((wallArea * additionalRate) / onerollArea);
    return numbers[rollCnt];
}
exports.wallpaper = wallpaper;
//# sourceMappingURL=7 kyu Easy wallpaper.js.map