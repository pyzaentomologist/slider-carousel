import updateBullet from "../Bullets/updateBullet.js";
import { getBookCurrent } from "../State.js";

const bulletBookToLeft = (
  i,
  bookTotal,
  nonActiveLeft,
  preactivedeBook,
  preactiveBook,
  proactiveBook,
  proactivedeBook,
  nonActiveRight,
  activeBook,
  books
) => {
  let currentBook = getBookCurrent();
  if (currentBook >= 0) {
    currentBook = i;
  } else {
    currentBook = bookTotal;
  }
  if (currentBook === 0) {
    nonActiveLeft = books[bookTotal - 2];
    preactivedeBook = books[bookTotal - 1];
    preactiveBook = books[bookTotal];
    proactiveBook = books[currentBook + 1];
    proactivedeBook = books[currentBook + 2];
    nonActiveRight = books[currentBook + 3];
  } else if (currentBook === 1) {
    nonActiveLeft = books[bookTotal - 1];
    preactivedeBook = books[bookTotal];
    preactiveBook = books[currentBook - 1];
    proactiveBook = books[currentBook + 1];
    proactivedeBook = books[currentBook + 2];
    nonActiveRight = books[currentBook + 3];
  } else if (currentBook === 2) {
    nonActiveLeft = books[bookTotal];
    preactivedeBook = books[currentBook - 2];
    preactiveBook = books[currentBook - 1];
    proactiveBook = books[currentBook + 1];
    proactivedeBook = books[currentBook + 2];
    nonActiveRight = books[currentBook + 3];
  } else if (currentBook > 2 && currentBook + 2 < bookTotal) {
    nonActiveLeft = books[currentBook - 3];
    preactivedeBook = books[currentBook - 2];
    preactiveBook = books[currentBook - 1];
    proactiveBook = books[currentBook + 1];
    proactivedeBook = books[currentBook + 2];
    nonActiveRight = books[currentBook + 3];
  } else if (currentBook + 1 < bookTotal) {
    nonActiveLeft = books[currentBook - 3];
    preactivedeBook = books[currentBook - 2];
    preactiveBook = books[currentBook - 1];
    proactiveBook = books[currentBook + 1];
    proactivedeBook = books[currentBook + 2];
    nonActiveRight = books[bookTotal - bookTotal];
  } else if (currentBook < bookTotal) {
    nonActiveLeft = books[currentBook - 3];
    preactivedeBook = books[currentBook - 2];
    preactiveBook = books[currentBook - 1];
    proactiveBook = books[currentBook + 1];
    proactivedeBook = books[bookTotal - bookTotal];
    nonActiveRight = books[bookTotal - bookTotal + 1];
  } else if (currentBook === bookTotal) {
    nonActiveLeft = books[currentBook - 3];
    preactivedeBook = books[currentBook - 2];
    preactiveBook = books[currentBook - 1];
    proactiveBook = books[bookTotal - bookTotal];
    proactivedeBook = books[bookTotal - bookTotal + 1];
    nonActiveRight = books[bookTotal - bookTotal + 2];
  }
  activeBook = books[currentBook];
  books.forEach((book) => {
    if (book === nonActiveLeft) {
      book.classList.remove(
        "preactivede",
        "preactive",
        "active__book",
        "proactive",
        "proactivede",
        "non-visible--right",
        "non-visible"
      );
      book.classList.add("non-visible--left");
    } else if (book === preactivedeBook) {
      book.classList.remove(
        "non-visible--left",
        "preactive",
        "active__book",
        "proactive",
        "proactivede",
        "non-visible--right",
        "non-visible"
      );
      book.classList.add("preactivede");
    } else if (book === preactiveBook) {
      book.classList.remove(
        "non-visible--left",
        "preactivede",
        "active__book",
        "proactive",
        "proactivede",
        "non-visible--right",
        "non-visible"
      );
      book.classList.add("preactive");
    } else if (book === activeBook) {
      book.classList.remove(
        "non-visible--left",
        "preactivede",
        "preactive",
        "proactive",
        "proactivede",
        "non-visible--right",
        "non-visible"
      );
      book.classList.add("active__book");
    } else if (book === proactiveBook) {
      book.classList.remove(
        "non-visible--left",
        "preactivede",
        "preactive",
        "active__book",
        "proactivede",
        "non-visible--right",
        "non-visible"
      );
      book.classList.add("proactive");
    } else if (book === proactivedeBook) {
      book.classList.remove(
        "non-visible--left",
        "preactivede",
        "preactive",
        "active__book",
        "proactive",
        "non-visible--right",
        "non-visible"
      );
      book.classList.add("proactivede");
    } else if (book === nonActiveRight) {
      book.classList.remove(
        "non-visible--left",
        "preactivede",
        "preactive",
        "active__book",
        "proactive",
        "proactivede",
        "non-visible"
      );
      book.classList.add("non-visible--right");
    } else {
      book.classList.remove(
        "non-visible--left",
        "preactivede",
        "preactive",
        "active__book",
        "proactive",
        "proactivede",
        "non-visible--right"
      );
      book.classList.add("non-visible");
    }
  });
  updateBullet(currentBook);
};

export default bulletBookToLeft;
