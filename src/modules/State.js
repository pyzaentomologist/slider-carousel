let bookCurrent = 0;

const setBookCurrent = (currentBook) => {
  bookCurrent = currentBook;
};
const getBookCurrent = () => {
  return bookCurrent;
};
export { getBookCurrent, setBookCurrent };
