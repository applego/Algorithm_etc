
// 数え上げ、スキャンを表すインターフェース
interface IIterator{
  hasNext(): boolean;
  next(): object;
}

// 集合体を表すインターフェース
interface IAggregate{
  iterator():IIterator;
}

// 本を著すクラス
class Book{
  constructor(public Name: string) {

  }
}

//本棚を表すクラス
class BookShelf implements IAggregate{
  books: Array<Book> = new Array<Book>();
  Last: number = 0;
  public getBookAt(index: number): Book{
    return this.books[index];
  }
  public appendBook(book: Book): void{
    this.books.push(book);
    this.Last++;
  }
  public getLength(): number{
    return this.Last;
  }
  public iterator(): IIterator{
    return new BookShelfIterator(this);
  }
}

// 本棚をスキャンするクラス
class BookShelfIterator implements IIterator{
  Index: number;
  constructor(private bookShelf: BookShelf) {
    this.Index = 0;
  }
  public hasNext(): boolean{
    if (this.Index < this.bookShelf.getLength()) {
      return true;
    } else {
      return false;
    }
  }
  public next(): object{
    const book:Book = this.bookShelf.getBookAt(this.Index);
    this.Index++;
    return book;
  }

}



function main(): void{
  const bookShelf: BookShelf = new BookShelf();
  bookShelf.appendBook(new Book("Around the world in 80 days"));
  bookShelf.appendBook(new Book("Bible"));
  bookShelf.appendBook(new Book("Cinderella"));
  bookShelf.appendBook(new Book("Daddy-Long-Legs"));
  const iterator: IIterator = bookShelf.iterator();
  while (iterator.hasNext()) {
    const book: Book = iterator.next() as Book;
    console.log(book.Name);
  }
}
main();
