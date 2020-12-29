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
exports.potatoesBP = exports.potatoes = void 0;
function potatoes(p0, w0, p1) {
    var w0Water = w0 * (p0 / 100);
    // 小数点の位置
    var dotPositionW0 = getDotPosition(w0);
    var dotPositionW0Water = getDotPosition(w0Water);
    // 小数点以下の位が多い方のいち
    var max = Math.max(dotPositionW0, dotPositionW0Water);
    // maxに合わせて文字列化　小数点を覗いて整数の値にする
    var intValue1 = parseInt((w0.toFixed(max) + '').replace('.', ''));
    var intValue2 = parseInt((w0Water.toFixed(max) + '').replace('.', ''));
    // 10^Nの値を計算
    var power = Math.pow(10, max);
    // 整数値で引き算した後に１０＾Nで割る
    var wDry = (intValue1 - intValue2) / power;
    // const wDry = (w0 * 10 - w0Water * 10) / 10; //* 誤差でる
    var w1 = wDry * 100 / (100 - p1);
    return Math.floor(w1);
}
exports.potatoes = potatoes;
// 小数点の誤差
function getDotPosition(value) {
    // 数値のままだと操作できないので文字列化する
    var strVal = String(value);
    var dotPosition = 0;
    //　小数点が存在するか確認
    if (strVal.lastIndexOf('.') === -1) {
        // 小数点があったら位置を取得
        dotPosition = (strVal.length - 1) - strVal.lastIndexOf('.');
    }
    return dotPosition;
}
/**
 *  //   wDry / w0 = 100 - 98 / 100
  // w0 = wDry*100/(100-98)

 w0 * p0 → initial water weight
 100 99
 w1 * p1 → final water weight
 (100 - X) * p1 → final water weight
 ()/(100-X)
 */
function potatoesBP(p0, w0, p1) {
    return Math.trunc(w0 * (100 - p0) / (100 - p1));
}
exports.potatoesBP = potatoesBP;
//# sourceMappingURL=7 kyu Drying Potatoes.js.map