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
    G964.ErrorNotFound = 'Error => Not found: ';
    G964.ErrorTooManyPeople = 'Error => Too many people: ';
    G964.phone = function (strng, num) {
        var directories = strng.split('\n');
        var matchNumberlist = directories.filter(function (s) { return s.includes(num); });
        if (matchNumberlist.length == 0)
            return G964.ErrorNotFound + num;
        if (matchNumberlist.length > 1)
            return G964.ErrorTooManyPeople + num;
        var s = matchNumberlist[0];
        //formated as +X-abc-def-ghij where X stands for one or two digits),
        var regexNum = /\+[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{4}/;
        var regexName = /<([^)]+)>/;
        var regexName2 = /<(.+)>/;
        var s2 = s.replace(regexNum, '');
        var matchName = regexName.exec(s2);
        var name = matchName ? matchName[1] : '';
        var s3 = s2.replace(regexName, '');
        // const address = s3
        //   .trim()
        //   .split(/ |_/)
        //   .filter(
        //     (v) => v !== '*' && v !== ';' && v !== '/' && v !== '?' && v !== '$'&& v !== ''
        //   )
        //   .join(' ')
        //   .trim();
        var address = s3
            .trim()
            .replace(/\*|;|,|\/|\?|\$|:/g, '')
            .replace('  ', ' ')
            .replace('_', ' ')
            .trim();
        return "Phone => " + num + ", Name => " + name + ", Address => " + address;
    };
    return G964;
}());
exports.G964 = G964;
/*
expected 'Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand_St.';
to equal 'Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St.';

expected 'Phone => 1-121-504-8974, Name => Arthur Clarke, Address => San Antonio $ TT-45120'
to equal 'Phone => 1-121-504-8974, Name => Arthur Clarke, Address => San Antonio TT-45120'
*/
// expected 'Phone => 48-421-674-8974, Name => Peter Gone, Address => Boulder Alley ZQ-87209  ';
// to equal 'Phone => 48-421-674-8974, Name => Peter Gone, Address => Boulder Alley ZQ-87209';
// expected 'Phone => 1-498-512-2222, Name => Bernard Deltheil, Address => Mount Av.  Eldorado';
// to equal 'Phone => 1-498-512-2222, Name => Bernard Deltheil, Address => Mount Av. Eldorado';
// expected 'Error => Too many people: num';
// to equal 'Error => Too many people: 1-541-984-3012';
// expected 'Phone => 1-498-512-2222, Name => Bernard Deltheil, Address => Mount Av.  Eldorado';
// to equal 'Phone => 1-498-512-2222, Name => Bernard Deltheil, Address => Mount Av. Eldorado';
// expected 'Error => Too many people: num2-481-512-2222';
// to equal 'Error => Too many people: 2-481-512-2222';
// expected 'Phone => 5-541-984-3012, Name => Peter Reeves, Address => /PO Box 5300; Albertville, SC-28573';
// to equal 'Phone => 5-541-984-3012, Name => Peter Reeves, Address => PO Box 5300 Albertville SC-28573';
// expected 'Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand_St.';
// to equal 'Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St.';
// expected 'Phone => 3-921-333-2222, Name => Roland Scorsini, Address => : Bellevue Street DA-67209';
// to equal 'Phone => 3-921-333-2222, Name => Roland Scorsini, Address => Bellevue Street DA-67209';
//# sourceMappingURL=5 kyu Phone Directory.js.map