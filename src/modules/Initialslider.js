const booksContainer = document.querySelector(".books");
const books = document.querySelectorAll(".lp__book");

let bookTotal = books.length - 1;
let bookCurrent = -1;

let nonActiveLeft;
let preactivedeBook;
let preactiveBook;
let proactiveBook;
let proactivedeBook;
let nonActiveRight;
let activeBook;

const initBullets = () => {
  const bulletContainer = document.createElement("div");
  bulletContainer.classList.add("bullet-container");
  for (let i = 0; i < books.length; i++) {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.id = `bullet-index-${i}`;
    bullet.addEventListener("click", () => {
      goToIndexBook(i);
    });
    bulletContainer.appendChild(bullet);
  }
  booksContainer.appendChild(bulletContainer);
};

const updateBullet = () => {
  document
    .querySelector(".bullet-container")
    .querySelectorAll(".bullet")
    .forEach((bull, i) => {
      bull.classList.remove("bullet-active");
      if (i === bookCurrent) {
        bull.classList.add("bullet-active");
      }
    });
};

const bulletBookToRight = (i) => {
  bookCurrent < bookTotal ? (bookCurrent = i) : (bookCurrent = 0);

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
  updateBullet();
};

const bulletBookToLeft = (i) => {
  if (bookCurrent > 0) {
    bookCurrent = i;
  } else {
    bookCurrent = bookTotal;
  }
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
  updateBullet();
};

const goToIndexBook = (index) => {
  const sliding =
    bookCurrent > index
      ? () => bulletBookToLeft(index)
      : () => bulletBookToRight(index);
  while (bookCurrent !== index) {
    sliding();
  }
};
const InitialSlider = () => {
  const rightArrow = document.querySelector(".arrow-right");
  const leftArrow = document.querySelector(".arrow-left");
  bookCurrent < bookTotal ? bookCurrent++ : (bookCurrent = 0);
  rightArrow.addEventListener("click", () => {
    bookCurrent < bookTotal ? bookCurrent++ : (bookCurrent = 0);
    bulletBookToRight(bookCurrent);
  });
  leftArrow.addEventListener("click", () => {
    if (bookCurrent > 0) {
      bookCurrent--;
    } else {
      bookCurrent = bookTotal;
    }
    bulletBookToLeft(bookCurrent);
  });
  initBullets();
  bulletBookToRight(bookCurrent);
};

export default InitialSlider;
