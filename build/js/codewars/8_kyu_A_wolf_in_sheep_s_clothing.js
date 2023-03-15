"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warnTheSheep = void 0;
var AnimalEnum;
(function (AnimalEnum) {
    AnimalEnum["WOLF"] = "wolf";
    AnimalEnum["SHEEP"] = "sheep";
})(AnimalEnum || (AnimalEnum = {}));
var WarnMessageEnum;
(function (WarnMessageEnum) {
    WarnMessageEnum["TO_SHEEP"] = "Oi! Sheep number N! You are about to be eaten by a wolf!";
    WarnMessageEnum["TO_WOLF"] = "Pls go away and stop eating my sheep";
})(WarnMessageEnum || (WarnMessageEnum = {}));
function warnTheSheep(queue) {
    if (queue.slice(-1)[0] === AnimalEnum.WOLF)
        return WarnMessageEnum.TO_WOLF;
    else {
        var wolf_idx = queue.findIndex(function (q) { return q === AnimalEnum.WOLF; }) + 1;
        var n = queue.length - wolf_idx;
        return WarnMessageEnum.TO_SHEEP.replace('N', n.toString());
    }
}
exports.warnTheSheep = warnTheSheep;
//# sourceMappingURL=8 kyu A wolf in sheep_s clothing.js.map