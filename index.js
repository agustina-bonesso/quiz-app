const showAnswerButton = document.querySelectorAll('[data-js="show-answer"]');
const bookmarkButton = document.querySelectorAll('[data-js="bookmark-button"]');

bookmarkButton.forEach((bookmarkItem) => {
  bookmarkItem.addEventListener("click", (event) => {
    handleBookmarkClick(event);
  });
});

function handleBookmarkClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("bookmark__button--click");
}

showAnswerButton.forEach((answerInput, i) => {
  answerInput.addEventListener("click", (event) => {
    const buttonElement = event.target;
    const answerContainer = document.querySelectorAll(".answer-container");

    answerContainer[i].classList.toggle("answer-container--show");
  });
});


