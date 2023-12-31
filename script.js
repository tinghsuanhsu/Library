
// TODO
// -------------------
// take users input [x]
//    validate data type
//    update read status [x] 
// store new book objects into an array [x]
// display book  [x]
// add 1 book to existing library [x]
// remove book [x]
// change book status [x]
// fix the bug of book counts when a book is removed when read [x]
// input validation 
//    only submit the form when all input are valid 
// read status input toggle [x]
// remove book layer div [x]
// clear the form input upon submission [x]

let libraryArray = [];
let bookId = 0;
let isChecked = false;

const library = document.querySelector('.book-container');
const numOfBook = document.querySelector('[data-num-of-book]');
const numOfBookRead = document.querySelector('[data-num-of-book-read]');
const form = document.querySelector('form');
const bookTitleElem = document.querySelector('#bookTitle');
const bookPriceElem = document.querySelector('#bookPrice');
const bookAuthorElem = document.querySelector('#bookAuthor');
const bookPageElem = document.querySelector('#bookPage');



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
  const bookStatusToggle = createReadStatusToggle(book);
  const bookPrice = createElementAndSetAttribute('p', 'data-price', '');
  const removeBook = createElementAndSetAttribute('button', 'data-remove', bookId);

  setText(bookAuthor, book, 'author');
  setText(bookPage, book, 'numOfPage');
  setText(bookTitle, book, 'title');
  setText(bookPrice, book, 'price');

  removeBook.innerHTML = '&times;';
  removeBook.classList.add('remove'); 

  // add attributes to the book container
  bookSpan.append(bookTitle, bookAuthor, bookPage, bookStatusToggle, bookPrice, removeBook)
  
  bookId++ // incremental bookID
  return bookSpan
}

function createReadStatusToggle(book) {
  let toggleContainer = document.createElement('div');
  toggleContainer.setAttribute('class', 'book-toggle');

  let toggleInput = document.createElement('input');
  toggleInput.setAttribute('type', 'checkbox');
  toggleInput.setAttribute('class', 'book-read-status');
  toggleInput.checked = book.readStatus == "Read" ? true:false; 
  toggleInput.setAttribute('data-read-status', book.readStatus)

  let toggleKnob = document.createElement('div');
  toggleKnob.setAttribute('class', 'book-knobs');

  toggleContainer.append(toggleInput, toggleKnob);
  return toggleContainer
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

// is required
// is valid 
// -- title and author -> text
// -- page number and price --> number 
// check title
// check author
// check page number
// check price
// error message
// ok message
function isRequired(value) {
  return value === '' ? false:true;
}

function isTitleValid(value) {
  const re = /^[a-zA-Z0-9]{1}[a-zA-Z0-9_\.\s-]*$/;
  return re.test(value)
}
function isAuthorValid(value) {
  const re = /^\S*\S$/;
  return re.test(value)
}

function isPageNumberValid(value) {
  const re = /^[1-9]+[0-9]*$/; // only allow whole positive number
  return re.test(value)
}

function isPriceValid(value){
  const re = /(^[1-9]{1,9}\.?\d{0,2}$)|(^0{1}\.+\d{0,2})$/; // start with 0 or not start with 0
  return re.test(value)
}

function checkTitle() {
  let valid = false;
  const title = bookTitleElem.value;
  if (!isRequired(title)){
    showError(bookTitleElem, 'Book title is required')
  } else if (!isTitleValid(title)) {
    showError(bookTitleElem, 'Please enter a valid book title')
  } else {
    showSuccess(bookTitleElem)
    valid = true
  }
  return valid
}
function checkAuthor() {
  let valid = false;
  const author = bookAuthorElem.value;
  if (!isRequired(author)){
    showError(bookAuthorElem, 'Author is required')
  } else if (!isAuthorValid(author)) {
    showError(bookAuthorElem, 'Please enter a valid author name.')
  } else {
    showSuccess(bookAuthorElem)
    valid = true
  }
  return valid
}
function checkPage() {
  let valid = false;
  const page = bookPageElem.value;
  if (!isRequired(page)){
    showError(bookPageElem, 'Page number is required')
  } else if (!isPageNumberValid(page)) {
    showError(bookPageElem, 'Please enter a valid page number.')
  } else {
    showSuccess(bookPageElem)
    valid = true
  }
  return valid
}
function checkPrice() {
  let valid = false;
  const price = bookPriceElem.value;
  if (!isRequired(price)){
    showError(bookPriceElem, 'Price is required')
  } else if (!isPriceValid(price)) {
    showError(bookPriceElem, 'Please enter a valid price.')
  } else {
    showSuccess(bookPriceElem)
    valid = true
  }
  return valid
}
function isAllValid() {
  return checkTitle() & checkAuthor() & checkPage() & checkPrice() 
}
function showError(input, message) {
  const inputData = input.parentElement;
  const errorField = inputData.querySelector('small');
  errorField.textContent = message

  input.classList.remove('success');
  input.classList.add('error');
}
function showSuccess(input) {
  const inputData = input.parentElement;
  const errorField = inputData.querySelector('small');
  errorField.textContent = ''

  input.classList.remove('error');
  input.classList.add('success');
}
// add new book
const subButton = document.querySelector('#button-submit')
subButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (isAllValid()) {
    let newBook = createBookObjFromInput();
    newBookElement = createBookElement(newBook, bookId);
    addBookToLibrary(newBookElement);
    numOfBook.innerHTML = libraryArray.length;
    numOfBookRead.innerText = countBookRead();
    form.reset();
  } 
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
  if (e.target.matches('.book-read-status')) {
      let check = e.target.checked; // get the check 
      e.target.dataset.readStatus = updateReadStatus(check); // translate check to Read/Not Read
      numOfBookRead.innerText = countBookRead(); // count the Read books
    } else {
    return ;
  }
}); 

form.addEventListener('input', function(e) {
  const inputField = e.target.id
  switch (inputField) {
    case 'bookTitle':
      checkTitle();
      break;
    case 'bookAuthor':
      checkAuthor();
      break;
    case 'bookPage':
      checkPage();
      break;
    case 'bookPrice':
      checkPrice();
      break;
    }  
  
})