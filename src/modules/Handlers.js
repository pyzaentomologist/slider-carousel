const popups = document.querySelectorAll(".popup");
const form = document.querySelector(".form");
const buttons = document.querySelectorAll(".button-book-popup");
const popupsBtns = document.querySelectorAll(".button_popup");

const Handlers = () => {
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

export default Handlers;
