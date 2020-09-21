"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIsogram3 = exports.isIsogram2 = exports.isIsogram = void 0;
var isNumber = function (value) {
    return ((typeof value === 'number') && (isFinite(value)));
};
var isNumberableString = function (value) {
    var parsed = parseInt(value);
    return !isNaN(parsed);
};
function isIsogram(str) {
    console.info(str);
    var charCounter = {};
    var arrayStr = str.toLowerCase().split('');
    for (var i = 0; i < arrayStr.length; i++) {
        var c = arrayStr[i];
        if (isNumberableString(c))
            return false;
        if (charCounter[c]) {
            charCounter[c] += 1;
            return false;
        }
        charCounter[c] = 1;
    }
    return true;
}
exports.isIsogram = isIsogram;
// solution
function isIsogram2(str) {
    return (new Set(str.toLowerCase())).size === str.length;
}
exports.isIsogram2 = isIsogram2;
// solutions
function isIsogram3(str) {
    //resolve str to lowercase first
    str = str.toLowerCase();
    //transform string to a Set to remove duplicates and
    //compare thhe size of the set to the length of the str
    return new Set(str.split('')).size === str.length;
}
exports.isIsogram3 = isIsogram3;
//# sourceMappingURL=7 kyu Isograms.js.map