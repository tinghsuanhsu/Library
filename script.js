
// features
// take users input
// store new book objects into an array
// display book
// let users add a book
// remove book 
// change book status





let myLibrary = [];
const bookDisplay = document.querySelector('.book-container');


class Book {
  constructor(author, title, numOfPage, readStatus, price) {
    this.author = author;
    this.title = title;
    this.numOfPage = numOfPage;
    this.readStatus = readStatus;
    this.price = price;
  }
}

function addBookToLibrary(book) {
  myLibrary = [...myLibrary, ...book]
}

function setText(element, obj, property) {
  element.innerText = obj[property]
}

function createElementAndSetAttribute(element, attribute, value, obj, property){
  container = document.createElement(element);
  container.setAttribute(attribute, value);
  setText(container, obj, property)
  return container
}

function displayBookinLibrary(book) {
  
  bookSpan = document.createElement('div');
  bookSpan.setAttribute('data-book','');

  bookTitle = createElementAndSetAttribute('p', 'data-title', '', book, 'title')
  bookAuthor = createElementAndSetAttribute('p', 'data-author', '', book, 'author')
  bookPage = createElementAndSetAttribute('p', 'data-page', '', book, 'numOfPage')
  bookReadStatus = createElementAndSetAttribute('p', 'data-read-status', '', book, 'readStatus')
  bookPrice = createElementAndSetAttribute('p', 'data-price', '', book, 'price')

  bookSpan.append(bookTitle, bookAuthor, bookPage, bookReadStatus, bookPrice)

  bookDisplay.append(bookSpan);
}



const book1 = new Book('Peter Peterson', 'A book of Pete', '123', 'Not Read', '15');
const book2 = new Book('JK Rolling', 'Happy Potter', '234', 'Read', '25');

const book3 = new Book('Apple', 'Nice Food', '10', 'Not Read', '3');
// myLibrary = [book1, book2, book3]

addBookToLibrary([book1])

for (let i =0; i < myLibrary.length ; i++) {
  displayBookinLibrary(myLibrary[i])

}



// features
// take users input
// store new book objects into an array
// display book
// let users add a book
// remove book 
// change book status





// let myLibrary = [];
// const bookDisplay = document.querySelector('.book-container');

// class Book {
//   constructor(author, title, numOfPage, readStatus, price) {
//     this.author = author;
//     this.title = title;
//     this.numOfPage = numOfPage;
//     this.readStatus = readStatus;
//     this.price = price;

//   }
// }

// function addBookToLibrary(book) {
//   myLibrary = [...myLibrary, ...book]
// }

// function createElementAndSetAttribute(element, attribute, value){
//   container = document.createElement(element);
//   container.setAttribute(attribute, value);
//   return container
// }

// function displayBookinLibrary(myLibrary) {
  
//   bookSpan = document.createElement('div');
//   bookSpan.setAttribute('data-book','');

//   // bookTitle = document.createElement('p');
//   // bookTitle.innerText = myLibrary.title
//   bookTitle = createElementAndSetAttribute('p', 'data-book', '')
 
//   bookAuthor = document.createElement('p');
//   bookAuthor.setAttribute('data-author','')
//   bookAuthor.innerText = myLibrary.author

//   bookPage = document.createElement('p');
//   bookPage.innerText = myLibrary.numOfPage
  
//   bookReadStatus = document.createElement('p');
//   bookReadStatus.innerText = myLibrary.readStatus

//   bookPrice = document.createElement('p');
//   bookPrice.innerText = myLibrary.price

//   bookSpan.append(bookTitle, bookAuthor, bookPage, bookReadStatus, bookPrice)

//   // console.log(bookDisplay)
//   bookDisplay.append(bookSpan);
//   // myLibrary.title =
//   // bookDisplay.innerText = book.title
//   //   myLibrary.forEach(book => {
//   //       console.log(book)
//   //       bookDisplay.innerText = book.title
//   //   });
// }

// const book1 = new Book('Peter Peterson', 'A book of Pete', '123', 'Not Read', '15');
// const book2 = new Book('JK Rolling', 'Happy Potter', '234', 'Read', '25');
// const books = [book1, book2]
// addBookToLibrary(books)
// // console.dir(bookDisplay)
// // addBookToLibrary(book2)

// displayBookinLibrary(myLibrary[0])