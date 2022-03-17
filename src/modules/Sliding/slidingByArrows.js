import bulletBookToLeft from "./bulletBookToLeft.js";
import bulletBookToRight from "./bulletBookToRight.js";
import { getBookCurrent, setBookCurrent } from "../State.js";

const slidingByArrows = (
  bookTotal,
  books,
  nonActiveLeft,
  preactivedeBook,
  preactiveBook,
  proactiveBook,
  proactivedeBook,
  nonActiveRight,
  activeBook
) => {
  const rightArrow = document.querySelector(".arrow-right");
  const leftArrow = document.querySelector(".arrow-left");
  let bookCurrent;
  rightArrow.addEventListener("click", () => {
    bookCurrent = getBookCurrent();
    bookCurrent < bookTotal ? bookCurrent++ : (bookCurrent = 0);
    console.log("Sliding " + bookCurrent);
    setBookCurrent(bookCurrent);
    bulletBookToRight(
      bookCurrent,
      bookTotal,
      nonActiveLeft,
      preactivedeBook,
      preactiveBook,
      proactiveBook,
      proactivedeBook,
      nonActiveRight,
      activeBook,
      books
    );
  });
  leftArrow.addEventListener("click", () => {
    bookCurrent = getBookCurrent();
    if (bookCurrent > 0) {
      bookCurrent--;
    } else {
      bookCurrent = bookTotal;
    }
    setBookCurrent(bookCurrent);
    bulletBookToLeft(
      bookCurrent,
      bookTotal,
      nonActiveLeft,
      preactivedeBook,
      preactiveBook,
      proactiveBook,
      proactivedeBook,
      nonActiveRight,
      activeBook,
      books
    );
  });
};
export default slidingByArrows;
