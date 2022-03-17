const handleShowForm = (popupsBtns, form) => {
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

export default handleShowForm;
