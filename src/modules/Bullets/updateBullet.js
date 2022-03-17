const updateBullet = (bookCurrent) => {
  document
    .querySelector(".bullet-container")
    .querySelectorAll(".bullet")
    .forEach((bull, i) => {
      bull.classList.remove("bullet-active");
      if (i === bookCurrent) {
        bull.classList.add("bullet-active");
      }
    });
};

export default updateBullet;
