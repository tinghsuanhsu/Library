
// features list
// -------------------
// take users input
// store new book objects into an array
// display book  [x]
// add 1 book to existing library [x]
// remove book 
// change book status



let myLibrary = [];
let bookId = 0;
const library = document.querySelector('.book-container');


class Book {
  constructor(author, title, numOfPage, readStatus, price) {
    this.author = author;
    this.title = title;
    this.numOfPage = numOfPage;
    this.readStatus = readStatus;
    this.price = price;
  }
}


function setText(element, obj, property) {
  element.innerText = obj[property]
}

function createElementAndSetAttribute(element, attribute, value){
  container = document.createElement(element);
  container.setAttribute(attribute, value);
  return container
}

function createBook(book, bookId) {

  // book container
  bookSpan = createElementAndSetAttribute('div', 'data-book', bookId);

  // book attributes
  bookTitle = createElementAndSetAttribute('p', 'data-title', '');
  setText(bookTitle, book, 'title');
  
  bookAuthor = createElementAndSetAttribute('p', 'data-author', '');
  setText(bookAuthor, book, 'author');
  
  bookPage = createElementAndSetAttribute('p', 'data-page', '');
  setText(bookPage, book, 'numOfPage');

  bookReadStatus = createElementAndSetAttribute('p', 'data-read-status', '');
  setText(bookReadStatus, book, 'readStatus');

  bookPrice = createElementAndSetAttribute('p', 'data-price', '');
  setText(bookPrice, book, 'price');

  // remove button
  removeBook = createElementAndSetAttribute('button', 'data-remove', bookId);
  removeBook.innerText = 'Remove';

  // add attributes to the book container
  bookSpan.append(bookTitle, bookAuthor, bookPage, bookReadStatus, bookPrice, removeBook)
  return bookSpan
}

function addBookToLibrary(book) {
  library.append(book)
}


function removeBookFromLibrary(bookId) {
  let toBeRemoved = document.querySelector(`[data-book="${bookId}"]`)
  library.removeChild(toBeRemoved)

}
// function displayBookinLibrary(bookSpan) {
  
//   library.append(bookSpan);

// }


// user "creating" books
const book1 = new Book('Peter Peterson', 'A book of Pete', '123', 'Not Read', '15');
const book2 = new Book('JK Rolling', 'Happy Potter', '234', 'Read', '25');
const book3 = new Book('Apple', 'Nice Food', '10', 'Not Read', '3');
const book4 = new Book('Looper', 'Eating food', '50', 'Read', '12.3');


let bookElement = createBook(book1, 1);
addBookToLibrary(bookElement);


bookElement = createBook(book2, 2);
addBookToLibrary(bookElement);




// testing adding books
// addBookToLibrary([book1, book2, book3])
// console.log(bookDisplay)
// addBookToLibrary([book4])
// console.log(myLibrary)

// displayBookinLibrary(myLibrary)
// testing displaying books
// for (let i =0; i < myLibrary.length ; i++) {
//   createBook(myLibrary[i], bookId)
//   bookId++
// }


const removeButtons = document.querySelectorAll('[data-remove]');
[...removeButtons].forEach(button => {
  button.addEventListener('click', (e) => {
    removeBookFromLibrary(e.target.dataset.remove)
  });
})

// myLibrary.pop()

// for (let i =0; i < myLibrary.length ; i++) {
//   displayBookinLibrary(myLibrary[i], bookId)
//   bookId++

// }
