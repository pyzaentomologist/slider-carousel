import handleActiveButton from "./handlers/handleActiveButton.js";
import handleShowPopup from "./handlers/handleShowPopup.js";
import handleShowForm from "./handlers/handleShowForm.js";
import handleClosePopup from "./handlers/handleClosePopup.js";
import handleCloseForm from "./handlers/handleCloseForm.js";

const popups = document.querySelectorAll(".popup");
const form = document.querySelector(".form");
const buttons = document.querySelectorAll(".button-book-popup");
const popupsBtns = document.querySelectorAll(".button_popup");

const Handlers = () => {
  handleActiveButton(buttons);
  handleShowPopup(buttons, popupsBtns, popups);
  handleShowForm(popupsBtns, form);
  handleClosePopup(popups);
  handleCloseForm(form);
};

export default Handlers;
