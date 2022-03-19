import bulletBookToLeft from "./bulletBookToLeft.js";
import bulletBookToRight from "./bulletBookToRight.js";
import { getBookCurrent, setBookCurrent } from "../states/bookCurrent.js";
import { bookTotal } from "../states/bookTotal.js";

const slidingByArrows = () => {
  const rightArrow = document.querySelector(".arrow-right");
  const leftArrow = document.querySelector(".arrow-left");
  let bookCurrent;
  rightArrow.addEventListener("click", () => {
    bookCurrent = getBookCurrent();
    bookCurrent < bookTotal ? bookCurrent++ : (bookCurrent = 0);
    setBookCurrent(bookCurrent);
    bulletBookToRight(bookCurrent);
  });
  leftArrow.addEventListener("click", () => {
    bookCurrent = getBookCurrent();
    if (bookCurrent > 0) {
      bookCurrent--;
    } else {
      bookCurrent = bookTotal;
    }
    setBookCurrent(bookCurrent);
    bulletBookToLeft(bookCurrent);
  });
};
export default slidingByArrows;
