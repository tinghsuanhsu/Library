
// features list
// -------------------
// take users input [x]
//    validate data type
//    update read status [x] 
// store new book objects into an array [x]
// display book  [x]
// add 1 book to existing library [x]
// remove book [x]
// change book status [x]
// fix the bug of book counts when a book is removed when read
// input validation
// read status input toggle 

let libraryArray = [];
let bookId = 0;
let isChecked = false;

const library = document.querySelector('.book-container');
const numOfBook = document.querySelector('[data-num-of-book]');
const numOfBookRead = document.querySelector('[data-num-of-book-read]');

class Book {
  constructor(title, author, numOfPage, readStatus, price) {
    this.author = author;
    this.title = title;
    this.numOfPage = numOfPage;
    this.readStatus = readStatus;
    this.price = price;
  }
}

function createBookObjFromInput() {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;
  const pageNumber = document.getElementById('bookPage').value;
  const readStatus = document.getElementById('bookReadStatus').checked == true ? 'Read': 'Not Read';
  const price = document.getElementById('bookPrice').value;
  const book = new Book(title, author, pageNumber, readStatus, price);
  return book
}

function setText(element, obj, property) {
  element.innerText = obj[property]
}

function createElementAndSetAttribute(element, attribute, value){
  let container = document.createElement(element);
  container.setAttribute(attribute, value);
  return container
}

function createBookElement(book) {

  const bookSpan = createElementAndSetAttribute('div', 'data-book', bookId);
  const bookTitle = createElementAndSetAttribute('p', 'data-title', '');
  const bookAuthor = createElementAndSetAttribute('p', 'data-author', '');
  const bookPage = createElementAndSetAttribute('p', 'data-page', '');
  const bookReadStatus = createElementAndSetAttribute('p', 'data-read-status', book.readStatus);
  const bookStatusToggle = createReadStatusToggle(book);
  const bookPrice = createElementAndSetAttribute('p', 'data-price', '');
  const removeBook = createElementAndSetAttribute('button', 'data-remove', bookId);

  setText(bookAuthor, book, 'author');
  setText(bookPage, book, 'numOfPage');
  setText(bookReadStatus, book, 'readStatus');
  setText(bookTitle, book, 'title');
  setText(bookPrice, book, 'price');

  // remove button
  // removeBook.innerText = 'Remove';
  removeBook.innerHTML = '&times;';
  removeBook.classList.add('remove');
  

  // add attributes to the book container
  bookSpan.append(bookTitle, bookAuthor, bookPage, bookReadStatus, bookStatusToggle, bookPrice, removeBook)
  
  bookId++ // incremental bookID
  return bookSpan
}

function createReadStatusToggle(book) {
  let toggleLabel = document.createElement('label');
  toggleLabel.setAttribute('class', 'switch');

  let toggleInput = document.createElement('input');
  toggleInput.setAttribute('type', 'checkbox');
  toggleInput.setAttribute('class', 'status');
  toggleInput.checked = book.readStatus == "Read" ? true:false; 

  // let toggleSpan = document.createElement('span');
  // toggleSpan.setAttribute('class', 'slider round');
  
  toggleLabel.append(toggleInput);
  return toggleLabel
}

function addBookToLibrary(book) {
  library.append(book); // add to DOM
  libraryArray.push(book.getAttribute('data-book')); // add to array
}

function removeBookFromLibrary(bookId) {
  const toBeRemoved = document.querySelector(`[data-book="${bookId}"]`);
  library.removeChild(toBeRemoved);
}

function updateReadStatus(checked) {
  return checked == true ? 'Read' : 'Not Read'
}

function countBookRead() {
  const bookRead = document.querySelectorAll('[data-read-status="Read"');
  return bookRead.length;
}

function validateInput() {
  
  const readStatus = document.getElementById('bookReadStatus').checked == true ? 'Read': 'Not Read';
  const price = document.getElementById('bookPrice').value;
}

// function validateBookPage() {
//   const pageNumber = document.getElementById('bookPage').value;
//   if (typeof(pageNumber))
// }

// add new book
const subButton = document.querySelector('#button-submit')
subButton.addEventListener('click', (e) => {
  e.preventDefault();
  let newBook = createBookObjFromInput();
  newBookElement = createBookElement(newBook, bookId);
  addBookToLibrary(newBookElement);
  numOfBook.innerHTML = libraryArray.length;
  numOfBookRead.innerText = countBookRead();
});

// remove the book
library.addEventListener('click', function(e) {
  if (e.target.matches('button')) {
    let bookToRemove = e.target.dataset.remove;
      removeBookFromLibrary(bookToRemove); // data-book id
      libraryArray = libraryArray.filter(book => book != bookToRemove);
      numOfBook.innerHTML = libraryArray.length;
      numOfBookRead.innerText = countBookRead();
    } else {
    return ;
  }
});

library.addEventListener('change', function(e) {
  if (e.target.matches('.status')) {
      let pTag = e.target.parentElement.previousElementSibling;
      let check = e.target.checked;
      pTag.innerText = updateReadStatus(check); 
      pTag.dataset.readStatus = updateReadStatus(check);
      numOfBookRead.innerText = countBookRead();

    } else {
    return ;
  }
}); 
