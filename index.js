const showAnswerButton = document.querySelector('[data-js="show-answer"]');
const outputSection = document.querySelector('[data-js="output-section"]');

showAnswerButton.addEventListener("click", () => {

    outputSection.textContent = "Here the answer";
});
