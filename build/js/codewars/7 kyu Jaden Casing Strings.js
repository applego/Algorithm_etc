"use strict";
// declare global{
//   interface String{
//     toJadenCase(): string;
//   }
// }
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.toJadenCase = function () {
    return this.split(' ')
        .map(function (word) { return word[0].toUpperCase() + word.slice(1); })
        .join(' ');
    //...
};
var TestCodewar_1 = __importDefault(require("./TestCodewar"));
var str = "How can mirrors be real if our eyes aren't real";
TestCodewar_1.default.assert_equals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
// 2021/01/13 13:19
// import { assert } from 'chai';
// const Test = {
//   expect: (...args: any) => (assert as any)(...args),
//   assertEquals: (...args: any) => (assert as any).equal(...args),
// };
// describe("solution", function(){
//   it('tests', () => {
//     let str = "How can mirrors be real if our eyes aren't real";
//     Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
//   });
// });
//# sourceMappingURL=7 kyu Jaden Casing Strings.js.map