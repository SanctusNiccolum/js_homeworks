

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class Library {

    constructor(){
        this.listOfBook = [];
    }
    

    addBook(book){
        this.listOfBook.push(book);
    }

    findBooksByAuthor(author){
        let res = []
        for (let book of this.listOfBook){
            if (book.author == author){
                res.push(book)
            }
        }
        return res;
    }
    listAllBooks()
    {
        console.log( this.listOfBook);
    }
}

class LibraryUser{
    constructor(librari){
        this.books = [];
        this.librari = librari;
    }
    borrowBook(book){
        if (this.books.length >= 3)
            {
                console.log(`Пользователь не может взять больше книг`);
            } else {
        if (this.librari.listOfBook.includes(book))
        {   this.books.push(book);
            this.librari.listOfBook = this.librari.listOfBook.filter((value) => value != book);
            console.log(`пользователь взял книгу ${book.title}`)}
        else {
            console.log(`нет такой книги в библиотеке`)
        }
    }
    }
    returnBook(book) {
        this.librari.listOfBook.push(book)
        this.books = this.books.filter((value) => value != book);
        console.log(`Пользователь вернул книгу ${book.title}`)
    }

}

// let b1 = new Book('Антикиллер', 'Данил Каретцкий', 600)
// let b2 = new Book('Рандеву с петлёй на шее', 'Николай Леонов', 316)
// let b3 = new Book('Мент в законе', 'Владимир Колычев', 428)
// let b4 = new Book('Благие знамения', 'Терри Прачет', 509)

// let l = new Library()
// l.addBook(b1)
// l.addBook(b2)
// l.addBook(b3)
// l.addBook(b4)

// l.listAllBooks()
// console.log(l.findBooksByAuthor('Данил Каретцкий'))
// let u = new LibraryUser(l)
// u.borrowBook(b1)
// u.borrowBook(b1)
// u.borrowBook(b3)
// u.borrowBook(b2)
// u.borrowBook(b4)

// console.log('--------------')

// console.log(u.books)
// l.listAllBooks()

// console.log('--------------')

// u.returnBook(b1)
// u.returnBook(b2)

// console.log(u.books)
// console.log('***')
// l.listAllBooks()
