const handleCloseForm = (form) => {
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
export default handleCloseForm;
