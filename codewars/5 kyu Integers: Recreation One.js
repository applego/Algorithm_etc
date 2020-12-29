"use strict";
exports.__esModule = true;
exports.G964_1227 = void 0;
var G964_1227 = /** @class */ (function () {
    function G964_1227() {
    }
    G964_1227.listSquared = function (m, n) {
        // your code
        console.log(m, n);
    };
    return G964_1227;
}());
exports.G964_1227 = G964_1227;
var TestCodewar_1 = require("./TestCodewar");
TestCodewar_1["default"].assert_equals(G964_1227.listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]]);
TestCodewar_1["default"].assert_equals(G964_1227.listSquared(42, 250), [[42, 2500], [246, 84100]]);
TestCodewar_1["default"].assert_equals(G964_1227.listSquared(250, 500), [[287, 84100]]);
TestCodewar_1["default"].assert_equals(G964_1227.listSquared(300, 600), []);
