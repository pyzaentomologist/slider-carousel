const handleActiveButton = (buttons) => {
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

export default handleActiveButton;
