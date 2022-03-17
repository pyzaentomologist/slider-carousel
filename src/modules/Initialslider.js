import initBullets from "./Bullets/initBullets.js";
import slidingByArrows from "./Sliding/slidingByArrows.js";
import bulletBookToRight from "./Sliding/bulletBookToRight.js";
import { getBookCurrent } from "./State.js";

const books = document.querySelectorAll(".lp__book");

let bookTotal = books.length - 1;

let currentBook = getBookCurrent();
let nonActiveLeft;
let preactivedeBook;
let preactiveBook;
let proactiveBook;
let proactivedeBook;
let nonActiveRight;
let activeBook;
const initialSlider = () => {
  initBullets(
    bookTotal,
    books,
    nonActiveLeft,
    preactivedeBook,
    preactiveBook,
    proactiveBook,
    proactivedeBook,
    nonActiveRight,
    activeBook
  );
  bulletBookToRight(
    currentBook,
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
  slidingByArrows(
    bookTotal,
    books,
    nonActiveLeft,
    preactivedeBook,
    preactiveBook,
    proactiveBook,
    proactivedeBook,
    nonActiveRight,
    activeBook
  );
};

export default initialSlider;
