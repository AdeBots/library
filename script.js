const myLibrary = [ ];

function Book(title, author, noOfPages, readStatus) {
    this.title = title;
    this.author = author;
    this.noOfPages =  noOfPages;
    this.readStatus = readStatus;
}

// function addBookToLibrary() {
//     const title;
//     const author;
//     const noOfPages;
//     const readStatus;
//     const newBook = new Book(title, author, noOfPages, readStatus);
//     myLibrary.push(newBook);
// }


const book1 = new Book("Iron Man", "Steve Rogers", 185, "read");
const book2 = new Book("Captain America", "Tony Stark", 124, "not read");
myLibrary.push(book1, book2);

const library = document.querySelector(".library");

for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement("div");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookNoOfPages = document.createElement("p");
    const bookReadStatus = document.createElement("p");
    book.classList.add("book");
    bookTitle.classList.add("title");
    bookAuthor.classList.add("author");
    bookNoOfPages.classList.add("noOfPages");
    bookReadStatus.classList.add("readStatus");
    book.appendChild(bookTitle);
    book.appendChild(bookAuthor);
    book.appendChild(bookNoOfPages);
    book.appendChild(bookReadStatus);
    library.appendChild(book);
    bookTitle.innerText = myLibrary[i].title;
    bookAuthor.innerText = myLibrary[i].author;
    bookNoOfPages.innerText = myLibrary[i].noOfPages;
    bookReadStatus.innerText = myLibrary[i].readStatus;
}