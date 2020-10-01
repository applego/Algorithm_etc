

//間違った共通化

class Product{
  productCode: string;
  title: string;
  author: string;
  unitPrice: number;
  private static CONSUMPTION_TAX_RATE = 10;

  constructor(arg: Omit<Product, 'getIaxIncludePrice'>) {
    this.productCode = arg.productCode;
    this.title = arg.title;
    this.author = arg.author;
    this.unitPrice = arg.unitPrice;
  }

  getTaxIncludedPrice() {
    return Math.floor(
      this.unitPrice * ((100 + Product.CONSUMPTION_TAX_RATE) / 100)
    );
  }
}

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