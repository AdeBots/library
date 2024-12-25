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
myLibrary.push(book1);
myLibrary.push(book2);
for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].title);
    console.log(myLibrary[i].author);
    console.log(myLibrary[i].noOfPages);
    console.log(myLibrary[i].readStatus);
}