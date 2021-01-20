"use strict";
exports.__esModule = true;
exports.Challenge = void 0;
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.getMiddle = function (s) {
        // return the middle charater(s)
        return "es";
    };
    return Challenge;
}());
exports.Challenge = Challenge;
/// <reference path="/runner/typings/main/ambient/mocha/index.d.ts" />
/// <reference path="/runner/typings/main/ambient/chai/index.d.ts" />
// import solution = require('./solution');
var chai_1 = require("chai");
function test(string, expected) {
    chai_1.assert.strictEqual(Challenge.getMiddle(string), expected);
}
describe("solution", function () {
    it("should handle basic tests", function () {
        test("test", "es");
        test("testing", "t");
    });
});
