"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWords = void 0;
/*
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
function _reverse(str) {
    return str.split('').reverse().join('');
}
function reverseWords(str) {
    //split
    //reverse
    var array = str.split(' ').map(function (word) { return _reverse(word); });
    console.log(array);
    return array.join('');
}
exports.reverseWords = reverseWords;
//# sourceMappingURL=7 kyu Reverse words.js.map