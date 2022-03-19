import goToIndexBook from "./goToIndexBook.js";
import { getBookCurrent, setBookCurrent } from "../states/bookCurrent.js";
import { books } from "../states/bookTotal.js";

const initBullets = () => {
  const booksContainer = document.querySelector(".books");
  const bulletContainer = document.createElement("div");
  bulletContainer.classList.add("bullet-container");

  for (let i = 0; i < books.length; i++) {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.id = `bullet-index-${i}`;
    bullet.addEventListener("click", () => {
      goToIndexBook(i, getBookCurrent());
      setBookCurrent(i);
    });
    bulletContainer.appendChild(bullet);
  }
  booksContainer.appendChild(bulletContainer);
};
export default initBullets;
