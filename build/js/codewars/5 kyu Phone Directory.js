"use strict";
/**
 * テキストから電話帳の整形
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
var ErrorMessages = {
    ErrorNotFound: 'Error => Not found: num',
    ErrorTooManyPeople: 'Error => Too many people: num',
};
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.phone = function (strng, num) {
        var directories = strng.split('\n');
        console.log(directories);
        var matchNumberlist = directories.filter(function (s) { return s.includes(num); });
        if (matchNumberlist.length == 0)
            return ErrorMessages.ErrorNotFound;
        if (matchNumberlist.length > 1)
            return ErrorMessages.ErrorTooManyPeople;
        var s = matchNumberlist[0];
        //formated as +X-abc-def-ghij where X stands for one or two digits),
        var regexNum = /\+[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{4}/;
        var regexName = /<([^)]+)>/;
        var regexName2 = /<(.+)>/;
        var s2 = s.replace(regexNum, '');
        var matchName = regexName.exec(s2);
        var name = matchName ? matchName[1] : '';
        var s3 = s2.replace(regexName, '');
        var address = s3
            .trim()
            .split(' ')
            .filter(function (v) { return v !== '*' && v !== ';'; })
            .join(' ');
        return "Phone => " + num + ", Name => " + name + ", Address => " + address;
    };
    return G964;
}());
exports.G964 = G964;
//# sourceMappingURL=5 kyu Phone Directory.js.map