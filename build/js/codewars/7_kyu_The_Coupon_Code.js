"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCoupon = void 0;
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode !== correctCode)
        return false;
    var cDate = Date.parse(currentDate);
    var eDate = Date.parse(expirationDate);
    if (!cDate || !eDate)
        return false;
    if (cDate > eDate)
        return false;
    return true;
}
exports.checkCoupon = checkCoupon;
//# sourceMappingURL=7 kyu The Coupon Code.js.map