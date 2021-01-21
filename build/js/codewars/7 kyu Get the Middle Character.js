"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.getMiddle = function (s) {
        var len = s.length;
        if (len % 2 === 1) {
            var middle = Math.floor(len / 2);
            return s[middle];
        }
        else {
            var middle = len / 2;
            return s.split('').slice(middle - 1, middle + 1).join('');
        }
    };
    return Challenge;
}());
exports.Challenge = Challenge;
//# sourceMappingURL=7 kyu Get the Middle Character.js.map