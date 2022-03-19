import { bookTotal, books } from "../states/bookTotal.js";

let nonActiveLeft;
let preactivedeBook;
let preactiveBook;
let proactiveBook;
let proactivedeBook;
let nonActiveRight;
let activeBook;

let bookByChoice = (bookCurrent) => {
  if (bookCurrent === 0) {
    nonActiveLeft = books[bookTotal - 2];
    preactivedeBook = books[bookTotal - 1];
    preactiveBook = books[bookTotal];
    proactiveBook = books[bookCurrent + 1];
    proactivedeBook = books[bookCurrent + 2];
    nonActiveRight = books[bookCurrent + 3];
  } else if (bookCurrent === 1) {
    nonActiveLeft = books[bookTotal - 1];
    preactivedeBook = books[bookTotal];
    preactiveBook = books[bookCurrent - 1];
    proactiveBook = books[bookCurrent + 1];
    proactivedeBook = books[bookCurrent + 2];
    nonActiveRight = books[bookCurrent + 3];
  } else if (bookCurrent === 2) {
    nonActiveLeft = books[bookTotal];
    preactivedeBook = books[bookCurrent - 2];
    preactiveBook = books[bookCurrent - 1];
    proactiveBook = books[bookCurrent + 1];
    proactivedeBook = books[bookCurrent + 2];
    nonActiveRight = books[bookCurrent + 3];
  } else if (bookCurrent > 2 && bookCurrent + 2 < bookTotal) {
    nonActiveLeft = books[bookCurrent - 3];
    preactivedeBook = books[bookCurrent - 2];
    preactiveBook = books[bookCurrent - 1];
    proactiveBook = books[bookCurrent + 1];
    proactivedeBook = books[bookCurrent + 2];
    nonActiveRight = books[bookCurrent + 3];
  } else if (bookCurrent + 1 < bookTotal) {
    nonActiveLeft = books[bookCurrent - 3];
    preactivedeBook = books[bookCurrent - 2];
    preactiveBook = books[bookCurrent - 1];
    proactiveBook = books[bookCurrent + 1];
    proactivedeBook = books[bookCurrent + 2];
    nonActiveRight = books[bookTotal - bookTotal];
  } else if (bookCurrent < bookTotal) {
    nonActiveLeft = books[bookCurrent - 3];
    preactivedeBook = books[bookCurrent - 2];
    preactiveBook = books[bookCurrent - 1];
    proactiveBook = books[bookCurrent + 1];
    proactivedeBook = books[bookTotal - bookTotal];
    nonActiveRight = books[bookTotal - bookTotal + 1];
  } else if (bookCurrent === bookTotal) {
    nonActiveLeft = books[bookCurrent - 3];
    preactivedeBook = books[bookCurrent - 2];
    preactiveBook = books[bookCurrent - 1];
    proactiveBook = books[bookTotal - bookTotal];
    proactivedeBook = books[bookTotal - bookTotal + 1];
    nonActiveRight = books[bookTotal - bookTotal + 2];
  }
  activeBook = books[bookCurrent];

  return {
    nonActiveLeft,
    preactivedeBook,
    preactiveBook,
    proactiveBook,
    proactivedeBook,
    nonActiveRight,
    activeBook,
  };
};

export default bookByChoice;
