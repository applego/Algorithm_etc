"use strict";
// // declare global{
// //   interface String{
// //     toJadenCase(): string;
// //   }
// // }
// String.prototype.toJadenCase = function (): string {
//   //* これでクリアできたけど、デバッグは成功しなかった。。
//   return this
//     .split(' ')
//     .map(word => word[0].toUpperCase() + word.slice(1))
//     .join(' ');
// };
// import Test from './TestCodewar';
// let str = "How can mirrors be real if our eyes aren't real";
// Test.assert_equals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
// // 2021/01/13 13:19
// // import { assert } from 'chai';
// // const Test = {
// //   expect: (...args: any) => (assert as any)(...args),
// //   assertEquals: (...args: any) => (assert as any).equal(...args),
// // };
// // describe("solution", function(){
// //   it('tests', () => {
// //     let str = "How can mirrors be real if our eyes aren't real";
// //     Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
// //   });
// // });
// * cleverest
// String.prototype.toJadenCase = function () {
//   return this.replace(/(?:^|\s)\S/g, firstLetter => firstLetter.toUpperCase());
// };
//# sourceMappingURL=7 kyu Jaden Casing Strings.js.map