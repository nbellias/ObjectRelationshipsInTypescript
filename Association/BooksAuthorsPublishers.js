"use strict";
/*
Here we have three entities:
    Author
    Book
    Publisher
An Author can write many Books, and a Book can be published by a Publisher.
*/
class Author {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    writeBook(title, publisher) {
        const book = new Book(title, this, publisher);
        this.books.push(book);
        publisher.books.push(book);
    }
}
class Book {
    constructor(title, author, publisher) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
    }
}
class Publisher {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
}
// Usage:
const author = new Author('J.K. Rowling');
const publisher = new Publisher('Bloomsbury');
author.writeBook('Harry Potter and the Philosopher\'s Stone', publisher);
console.log(author.books[0].title); // "Harry Potter and the Philosopher's Stone"
console.log(publisher.books[0].title); // "Harry Potter and the Philosopher's Stone"
//# sourceMappingURL=BooksAuthorsPublishers.js.map