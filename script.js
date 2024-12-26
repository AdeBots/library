const myLibrary = [ ];

function Book(title, author, noOfPages, readStatus) {
    this.title = title;
    this.author = author;
    this.noOfPages =  noOfPages;
    this.readStatus = readStatus;
}



function createBook(bookData, index){
    const book = document.createElement("div");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookNoOfPages = document.createElement("p");
    const bookReadStatus = document.createElement("p");
    const removeBtn = document.createElement("button");

    book.classList.add("book");
    bookTitle.classList.add("title");
    bookAuthor.classList.add("author");
    bookNoOfPages.classList.add("noOfPages");
    bookReadStatus.classList.add("readStatus");
    removeBtn.classList.add("removeBtn");

    bookTitle.innerText = bookData.title;
    bookAuthor.innerText = bookData.author;
    bookNoOfPages.innerText = bookData.noOfPages;
    bookReadStatus.innerText = bookData.readStatus;
    removeBtn.innerText = "Remove Book"

    book.appendChild(bookTitle);
    book.appendChild(bookAuthor);
    book.appendChild(bookNoOfPages);
    book.appendChild(bookReadStatus);
    book.appendChild(removeBtn);

    book.setAttribute('data-index', index);

    removeBtn.addEventListener("click", () => {
        removeBookFromLibrary(index);
    })
    
    return book;    
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
    const bookElement = document.querySelector(`.book[data-index='${index}']`);
    library.removeChild(bookElement);
    updateBookIndices();
}

function updateBookIndices() {
    const bookElements = document.querySelectorAll('.book');
    bookElements.forEach((bookElement, newIndex) => {
        bookElement.setAttribute('data-index', newIndex);
    });
}

function clearInputs() {
    title.value = '';
    author.value =''; 
    noOfPages.value = ''; 
    readStatus.value = '';
}

function addBookToLibrary() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const noOfPages = document.querySelector("#noOfPages").value;
    const readStatus = document.querySelector("#readStatus").value;

    const newBook = new Book(title, author, noOfPages, readStatus);
    myLibrary.push(newBook);

    const bookElement = createBook(newBook, myLibrary.length - 1);
    library.appendChild(bookElement);
    
    clearInputs();

}


const addBookBtn = document.querySelector(".addNewBook");
const dialog = document.querySelector("dialog");
const library = document.querySelector(".library");

addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});


const addBook = document.querySelector(".addBook");
addBook.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    dialog.close();
})



