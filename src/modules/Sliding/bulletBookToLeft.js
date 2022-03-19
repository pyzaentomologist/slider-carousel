import updateBullet from "../Bullets/updateBullet.js";
import { getBookCurrent } from "../states/bookCurrent.js";
import { bookTotal, books } from "../states/bookTotal.js";
import bookByChoice from "../states/bookByChoice.js";

const bulletBookToLeft = (i) => {
  let bookCurrent = getBookCurrent();
  if (bookCurrent >= 0) {
    bookCurrent = i;
  } else {
    bookCurrent = bookTotal;
  }
  let {
    nonActiveLeft,
    preactivedeBook,
    preactiveBook,
    proactiveBook,
    proactivedeBook,
    nonActiveRight,
    activeBook,
  } = bookByChoice(bookCurrent);
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
  updateBullet(bookCurrent);
};

export default bulletBookToLeft;
