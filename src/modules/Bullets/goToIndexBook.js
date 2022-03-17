import bulletBookToLeft from "../Sliding/bulletBookToLeft.js";
import bulletBookToRight from "../Sliding/bulletBookToRight.js";

const goToIndexBook = (
  index,
  bookTotal,
  books,
  nonActiveLeft,
  preactivedeBook,
  preactiveBook,
  proactiveBook,
  proactivedeBook,
  nonActiveRight,
  activeBook,
  currentBook
) => {
  const sliding =
    currentBook > index
      ? () =>
          bulletBookToLeft(
            index,
            bookTotal,
            nonActiveLeft,
            preactivedeBook,
            preactiveBook,
            proactiveBook,
            proactivedeBook,
            nonActiveRight,
            activeBook,
            books
          )
      : () =>
          bulletBookToRight(
            index,
            bookTotal,
            nonActiveLeft,
            preactivedeBook,
            preactiveBook,
            proactiveBook,
            proactivedeBook,
            nonActiveRight,
            activeBook,
            books
          );
  while (currentBook !== index) {
    return sliding();
  }
};

export default goToIndexBook;
