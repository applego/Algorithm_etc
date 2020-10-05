"use strict";
// import { reverse } from "dns";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWords_ = exports.reverseWords = void 0;
/*
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
function _reverse(str) {
    return str.split('').reverse().join('');
}
function reverseWords(str) {
    return str.split(' ').map(function (word) { return _reverse(word); }).join(' ');
}
exports.reverseWords = reverseWords;
//BP 別メソッド作ってないだけでやってることは同じかな
function reverseWords_(str) {
    return str
        .split(' ')
        .map(function (word) { return word
        .split('')
        .reverse()
        .join(''); })
        .join();
}
exports.reverseWords_ = reverseWords_;
//# sourceMappingURL=7 kyu Reverse words.js.map