"use strict";
/*
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_ = exports.order = void 0;
function order(words) {
    if (!words)
        return '';
    var splitedWords = words.split(' ');
    return splitedWords
        .map(function (val, idx) {
        return [idx, parseInt(val.replace(/[^0-9]/g, ''))];
    }).sort(function (first, second) {
        return first[1] - second[1];
    }).map(function (val) {
        return splitedWords[val[0]];
    }).join(' ');
    //ここまでで提出
    var splited = words.split(' ');
    var hash_idx_num = {};
    for (var i = 0; i < splited.length; i++) {
        var num = splited[i].replace(/[^0-9]/g, '');
        hash_idx_num[i] = parseInt(num); //key:配列にしたときとインデックスの初期値,value: 含まれる数字
    }
    // Create items array
    var sortedByValue = Object.keys(hash_idx_num).map(function (key) {
        var key_num = parseInt(key);
        return [key_num, hash_idx_num[key_num]];
    });
    // Sort the array based on the second element
    sortedByValue.sort(function (first, second) {
        return first[1] - second[1];
    });
    return sortedByValue.map(function (a) { return splited[a[0]]; }).join(' ');
}
exports.order = order;
//BP
function order_(words) {
    return words.split(' ')
        .sort(function (a, b) { return +a.match(/\d/) - +b.match(/\d/); })
        .join(' ');
}
exports.order_ = order_;
//# sourceMappingURL=6 kyu Your order, please.js.map