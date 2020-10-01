"use strict";
//間違った共通化
var Product = /** @class */ (function () {
    function Product(arg) {
        this.productCode = arg.productCode;
        this.title = arg.title;
        this.author = arg.author;
        this.unitPrice = arg.unitPrice;
    }
    Product.prototype.getTaxIncludedPrice = function () {
        return Math.floor(this.unitPrice * ((100 + Product.CONSUMPTION_TAX_RATE) / 100));
    };
    Product.CONSUMPTION_TAX_RATE = 10;
    return Product;
}());
// const productList = [
//   new Product({
//     productCode: '0001',
//     title: 'Just for Fun',
//     author: 'Linus Torvalds',
//     unitPrice: 1500,
//   }),
//   new Product({
//     productCode: '0002',
//     title: 'Nineteen Eighty-Four',
//     author: 'George Orwell',
//     unitPrice: 1000,
//   }),
// ];
// productList.forEach(p => {
//   console.log(p.getTaxIncludedPrice());
// });
// 1650
// 1100
//# sourceMappingURL=TypeScript_抽象.js.map