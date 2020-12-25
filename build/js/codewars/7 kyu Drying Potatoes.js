"use strict";
/**
 Write function potatoes with

int parameter p0 - initial percent of water-
int parameter w0 - initial weight -
int parameter p1 - final percent of water -
potatoesshould return the final weight coming out of the oven w1 truncated as an int.

potatoes(99, 100, 98) --> 50
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.potatoes = void 0;
function potatoes(p0, w0, p1) {
    var w0Water = w0 * (p0 / 100);
    var wDry = (w0 * 10 - w0Water * 10) / 10;
    var w1 = wDry * 100 / (100 - p1);
    return Math.floor(w1);
}
exports.potatoes = potatoes;
/**
 *  //   wDry / w0 = 100 - 98 / 100
  // w0 = wDry*100/(100-98)

 w0 * p0 → initial water weight
 100 99
 w1 * p1 → final water weight
 (100 - X) * p1 → final water weight
 ()/(100-X)
 */
//# sourceMappingURL=7 kyu Drying Potatoes.js.map