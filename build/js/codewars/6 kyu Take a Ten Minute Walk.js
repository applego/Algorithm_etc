"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidWalk = void 0;
var parseDirectionToNumber = function (direction) {
    switch (direction) {
        case 'n':
            return { x: 0, y: 1 };
        case 's':
            return { x: 0, y: -1 };
        case 'e':
            return { x: 1, y: 0 };
        case 'w':
            return { x: -1, y: 0 };
        default:
            return { x: 0, y: 0 };
    }
};
function isValidWalk(walk) {
    if (walk.length !== 10)
        return false;
    var x = 0;
    var y = 0;
    walk.forEach(function (direction) {
        var p = parseDirectionToNumber(direction);
        x += p.x;
        y += p.y;
    });
    return x === 0 && y === 0;
}
exports.isValidWalk = isValidWalk;
//# sourceMappingURL=6 kyu Take a Ten Minute Walk.js.map