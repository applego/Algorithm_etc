"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964_20210110 = void 0;
var G964_20210110 = /** @class */ (function () {
    function G964_20210110() {
    }
    G964_20210110.isUpperCase = function (c) {
        return /^[A-Z]+$/g.test(c);
    };
    G964_20210110.getPrefix = function (s, shift) {
        var firstCharDown = s[0].toLocaleLowerCase();
        var shifted = G964_20210110.getShiftedChar(firstCharDown, shift);
        return firstCharDown + shifted;
    };
    G964_20210110.getShiftedChar = function (c, shift) {
        if (c.match(/[^a-zA-Z]/gi))
            return c;
        if (G964_20210110.isUpperCase(c)) {
            var idx = c.charCodeAt(0) - 'A'.charCodeAt(0);
            var idxShifted = (idx + shift) % G964_20210110.Alphabet.length;
            return G964_20210110.Alphabet[idxShifted];
        }
        else {
            var idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
            var idxShifted = (idx + shift) % G964_20210110.Alphabet.length;
            return G964_20210110.alphabet[idxShifted];
        }
    };
    G964_20210110.getShiftedString = function (s, shift) {
        return s.split('')
            .reduce(function (acc, c) {
            return acc + G964_20210110.getShiftedChar(c, shift);
        }, '');
    };
    G964_20210110.getShiftNum = function (s) {
        if (s.length !== 2)
            throw new Error;
        var idx = s[0].charCodeAt(0) - 'a'.charCodeAt(0);
        var idx2 = s[1].charCodeAt(0) - 'a'.charCodeAt(0);
        var shift = (s[1].charCodeAt(0) - s[0].charCodeAt(0)) % G964_20210110.Alphabet.length;
        return shift;
    };
    G964_20210110.getDecodeChar = function (c, shift) {
        if (c.match(/[^a-zA-Z]/gi))
            return c;
        if (G964_20210110.isUpperCase(c)) {
            var idx = c.charCodeAt(0) - 'A'.charCodeAt(0);
            var idxShifted = (idx - shift) % G964_20210110.Alphabet.length;
            return G964_20210110.Alphabet[idxShifted];
        }
        else {
            var idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
            var idxShifted = (idx - shift) % G964_20210110.Alphabet.length;
            return G964_20210110.alphabet[idxShifted];
        }
    };
    G964_20210110.getDecodeString = function (s, shift) {
        return s.split('')
            .reduce(function (acc, c) {
            return acc + G964_20210110.getDecodeChar(c, shift);
        }, '');
    };
    G964_20210110.divideNumber = 5;
    G964_20210110.alphabet = 'abcdefghijklmnopqrstuvwxyz';
    G964_20210110.Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    G964_20210110.encodeStr = function (s, shift) {
        var prefix = G964_20210110.getPrefix(s, shift);
        var suffix = G964_20210110.getShiftedString(s, shift);
        var merged = prefix + suffix;
        var lenElement = Math.ceil(merged.length / G964_20210110.divideNumber);
        var regexp = new RegExp(".{1," + lenElement.toString() + "}", 'g');
        var arr = merged.match(regexp);
        return arr !== null ? arr : [];
    };
    G964_20210110.decode = function (arr) {
        var _a;
        // your code
        // prefix からshiftを判別
        var firstEleArr = (_a = arr.shift()) === null || _a === void 0 ? void 0 : _a.split('');
        if (!firstEleArr)
            throw new Error;
        var prefix = firstEleArr.slice(0, 2).join('').toString();
        var shift = G964_20210110.getShiftNum(prefix);
        var suffixFirst = firstEleArr.slice(2).join('').toString();
        var codeSuffixFirst = G964_20210110.getDecodeString(suffixFirst, shift);
        var decoded = codeSuffixFirst;
        var currEle;
        while ((currEle = arr.shift()) !== undefined) {
            decoded += G964_20210110.getDecodeString(currEle, shift);
        }
        return decoded;
    };
    return G964_20210110;
}());
exports.G964_20210110 = G964_20210110;
/*
The prefix is built of 2 letters, the second one being shifted from the first one by the "rotate", the first one is the first letter, after being downcased, of the uncoded message.
For example if the "rotate" is 2, if the first letter of the uncoded message is 'J' the prefix should be 'jl'.

u = "I should have known that you would have a perfect answer for me!!!";
v = ["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"];
*/
//# sourceMappingURL=5 kyu Second Variation on Caesar Cipher.js.map