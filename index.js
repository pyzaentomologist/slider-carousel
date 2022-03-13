const booksContainer = document.querySelector(".books");
const books = document.querySelectorAll(".lp__book");
const popups = document.querySelectorAll(".popup");
const form = document.querySelector(".form");
const buttons = document.querySelectorAll(".button-book-popup");
const popupsBtns = document.querySelectorAll(".button_popup");

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
const initialSlider = () => {
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

const handlers = () => {
  const handleActiveButtons = () => {
    const buttonsAll = [
      ".book_first",
      ".book_second",
      ".book_third",
      ".book_fourth",
      ".book_fifth",
      ".book_sicth",
      ".book_seventh",
      ".book_eight",
      ".book_nineth",
      ".book_tenth",
    ];
    for (let index = 0; index < buttonsAll.length; index++) {
      let nodeBtns = document.querySelectorAll(buttonsAll[index]);
      nodeBtns.forEach((button) => {
        button.addEventListener("click", () => {
          for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
            buttons[i].innerText = `Zamawiam ${i + 1}`;
          }
          for (let i = 0; i < nodeBtns.length; i++) {
            nodeBtns[i].classList.add("active");
            nodeBtns[i].innerText = `Wybrano ${index + 1}`;
          }
        });
      });
    }
  };

  const handleShowPopup = () => {
    const booksBtns = document.querySelectorAll(".book__button");
    const imgs = document.querySelectorAll(".lp__img");
    imgs.forEach((img, i) => {
      img.addEventListener("click", () => {
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove("active");
          buttons[i].innerText = `Zamawiam ${i + 1}`;
        }
        popupsBtns.forEach((btn) => {
          btn.innerText = `Zamów ${i + 1}`;
        });
        popups[i].classList.remove("hide");
      });
    });
    booksBtns.forEach((bookBtn, i) => {
      bookBtn.addEventListener("click", () => {
        popups[i].classList.remove("hide");
      });
    });
  };

  const handleShowForm = () => {
    const popupsSmall = document.querySelectorAll(".popup_s");
    popupsBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        form.classList.remove("hide");
      });
    });
    popupsSmall.forEach((popupSmall) => {
      popupSmall.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });
  };
  const handleClosePopup = () => {
    const closePopups = document.querySelectorAll(".popup__closeme");
    popups.forEach((popup) => {
      popup.addEventListener("click", () => {
        popup.classList.add("hide");
      });
    });
    closePopups.forEach((closePopup, i) => {
      closePopup.addEventListener("click", (e) => {
        e.stopPropagation();
        popups[i].classList.add("hide");
      });
    });
  };
  const handleCloseForm = () => {
    const closeForm = document.querySelector(".form__closeme");
    const formContainer = document.querySelector(".form__container");
    formContainer.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    form.addEventListener("click", () => {
      form.classList.add("hide");
    });
    closeForm.addEventListener("click", () => {
      form.classList.add("hide");
    });
  };
  handleActiveButtons();
  handleShowPopup();
  handleShowForm();
  handleClosePopup();
  handleCloseForm();
};

initialSlider();
handlers();
