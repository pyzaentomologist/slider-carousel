import bulletBookToLeft from "../Sliding/bulletBookToLeft.js";
import bulletBookToRight from "../Sliding/bulletBookToRight.js";

const goToIndexBook = (index, currentBook) => {
  const sliding =
    currentBook > index
      ? () => bulletBookToLeft(index)
      : () => bulletBookToRight(index);
  while (currentBook !== index) {
    return sliding();
  }
};

export default goToIndexBook;
