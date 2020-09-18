"use strict";
// import m1 = require("./8 kyu The falling speed of petals");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// m1.sakuraFall(0);
// m1.sakuraFall(5);
// m1.sakuraFall(10);
// m1.sakuraFall(-1);
// m1.sakuraFall(200);
// console.log(m1.f(1000)); // "1,000円"
// console.log(m1.f2(1000)); // "1,000円"
// console.log(m1.f2(1000, 'ペソ')); // "1,000ペソ"
var isograms = require("./7 kyu Isograms");
var TestCodewar_1 = __importDefault(require("./TestCodewar"));
var test = new TestCodewar_1.default(); //__filename
test.assert_equals(isograms.isIsogram("Dermatoglyphics"), true); // isograms.isIsogram("Dermatoglyphics")//, true );
test.assert_equals(isograms.isIsogram("isogram"), true);
test.assert_equals(isograms.isIsogram("aba"), false, "same chars may not be adjacent");
test.assert_equals(isograms.isIsogram("moOse"), false, "same chars may not be same case");
test.assert_equals(isograms.isIsogram("isIsogram"), false);
test.assert_equals(isograms.isIsogram(""), true, "an empty string is a valid isogram");
//# sourceMappingURL=main.js.map