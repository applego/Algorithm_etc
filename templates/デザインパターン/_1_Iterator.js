// 本を著すクラス
var Book = /** @class */ (function () {
    function Book(Name) {
        this.Name = Name;
    }
    return Book;
}());
//本棚を表すクラス
var BookShelf = /** @class */ (function () {
    function BookShelf() {
        this.books = new Array();
        this.Last = 0;
    }
    BookShelf.prototype.getBookAt = function (index) {
        return this.books[index];
    };
    BookShelf.prototype.appendBook = function (book) {
        this.books.push(book);
        this.Last++;
    };
    BookShelf.prototype.getLength = function () {
        return this.Last;
    };
    BookShelf.prototype.iterator = function () {
        return new BookShelfIterator(this);
    };
    return BookShelf;
}());
// 本棚をスキャンするクラス
var BookShelfIterator = /** @class */ (function () {
    function BookShelfIterator(bookShelf) {
        this.bookShelf = bookShelf;
        this.Index = 0;
    }
    BookShelfIterator.prototype.hasNext = function () {
        if (this.Index < this.bookShelf.getLength()) {
            return true;
        }
        else {
            return false;
        }
    };
    BookShelfIterator.prototype.next = function () {
        var book = this.bookShelf.getBookAt(this.Index);
        this.Index++;
        return book;
    };
    return BookShelfIterator;
}());
function main() {
    var bookShelf = new BookShelf();
    bookShelf.appendBook(new Book("Around the world in 80 days"));
    bookShelf.appendBook(new Book("Bible"));
    bookShelf.appendBook(new Book("Cinderella"));
    bookShelf.appendBook(new Book("Daddy-Long-Legs"));
    var iterator = bookShelf.iterator();
    while (iterator.hasNext()) {
        var book = iterator.next();
        console.log(book.Name);
    }
}
main();
