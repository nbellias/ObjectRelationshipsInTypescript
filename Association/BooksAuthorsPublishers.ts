/*
Here we have three entities:
    Author
    Book
    Publisher
An Author can write many Books, and a Book can be published by a Publisher.
*/

class Author {
    name: string;
    books: Book[];

    constructor(name: string) {
        this.name = name;
        this.books = [];
    }

    writeBook(title: string, publisher: Publisher): void {
        const book = new Book(title, this, publisher);
        this.books.push(book);
        publisher.books.push(book);
    }
}

class Book {
    title: string;
    author: Author;
    publisher: Publisher;

    constructor(title: string, author: Author, publisher: Publisher) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
    }
}

class Publisher {
    name: string;
    books: Book[];

    constructor(name: string) {
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
