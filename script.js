
// features list
// -------------------
// take users input [x]
// store new book objects into an array [kinda]
// display book  [x]
// add 1 book to existing library [x]
// remove book [x]
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

function createBookElement(book, bookId) {

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
  removeBook.classList.add('remove');

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

// user "creating" books
const book1 = new Book('Peter Peterson', 'A book of Pete', '123', 'Not Read', '15');
const book2 = new Book('JK Rolling', 'Happy Potter', '234', 'Read', '25');
const book3 = new Book('Apple', 'Nice Food', '10', 'Not Read', '3');
const book4 = new Book('Looper', 'Eating food', '50', 'Read', '12.3');


let newBookElement = createBookElement(book1, 1);
addBookToLibrary(newBookElement);


newBookElement = createBookElement(book2, 2);
addBookToLibrary(newBookElement);


function createBookObjFromInput() {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;
  const pageNumber = document.getElementById('bookPage').value;
  const readStatus = document.getElementById('bookReadStatus').value;
  const price = document.getElementById('bookPrice').value;

  const book = new Book(title, author, pageNumber, readStatus, price);
  return book
}



let newBook;

const subButton = document.querySelector('#submit')
subButton.addEventListener('click', (e) => {
  e.preventDefault();
  newBook = createBookObjFromInput();
  newBookElement = createBookElement(newBook, 3);
  addBookToLibrary(newBookElement);
  removeButtons = document.getElementsByClassName('remove');
})


// let removeButtons = document.getElementsByClassName('remove');
// // console.log([...removeButtons]);
// [...removeButtons].forEach(button => {
//   button.addEventListener('DOMContentLoaded', (e) => {
//     console.log(e)
//     removeBookFromLibrary(e.target.dataset.remove) // data-book id
//   });
// })

library.addEventListener('click', function(e) {
  const target = e.target.closest('.remove');
  if (target.className === 'remove') {
      removeBookFromLibrary(target.dataset.remove) // data-book id
  }
  }
) 