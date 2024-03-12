const showAnswerButton = document.querySelector('[data-js="show-answer"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

bookmarkButton.addEventListener("click", handleBookmarkClick);

function handleBookmarkClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("bookmark__button--click");
}


showAnswerButton.addEventListener("click", (event) => {
  const buttonElement = event.target;
  const answerContainer = document.querySelector(".answer-container");

  answerContainer.classList.toggle("answer-container--show");
  if (buttonElement.textContent === "Show") {
    buttonElement.textContent = "Hide";
  } else {
    buttonElement.textContent = "Show";
  }
});



