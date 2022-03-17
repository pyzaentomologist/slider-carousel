const handleShowPopup = (buttons, popupsBtns, popups) => {
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

export default handleShowPopup;
