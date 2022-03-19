import initBullets from "./Bullets/initBullets.js";
import slidingByArrows from "./Sliding/slidingByArrows.js";
import bulletBookToRight from "./Sliding/bulletBookToRight.js";
import { getBookCurrent } from "./states/bookCurrent.js";

let currentBook = getBookCurrent();

const initialSlider = () => {
  initBullets();
  bulletBookToRight(currentBook);
  slidingByArrows();
};

export default initialSlider;
