const handleClosePopup = (popups) => {
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

export default handleClosePopup;
