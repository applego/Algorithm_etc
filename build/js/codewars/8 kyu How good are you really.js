"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.betterThanAverage = void 0;
function betterThanAverage(classPoints, yourPoints) {
    var average = classPoints.reduce(function (acc, point) { return acc + point; }) / classPoints.length;
    return yourPoints > average;
}
exports.betterThanAverage = betterThanAverage;
//# sourceMappingURL=8 kyu How good are you really.js.map