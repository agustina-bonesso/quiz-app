const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelectorAll('[data-js="textInput"]');
const charactersLeftElement = document.querySelectorAll(
  '[data-js="remaining-characters"]'
);

//questionInput.addEventListener("input", (event) => {
//  charactersLeftElement.textContent = 150 - event.target.value.length;
//});

questionInput.forEach((inputItem, index) => {
  inputItem.addEventListener("input", () => {
    charactersLeftElement[index].textContent = 150 - inputItem.value.length;
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const inputQuestion = data.question;
  const inputAnswer = data.answer;
  const inputTag = data.tag;

  const sectionCard = document.createElement("section");
  sectionCard.classList.add("card");
  const questionTitle = document.createElement("h3");
  sectionCard.append(questionTitle);
  questionTitle.textContent = inputQuestion;

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("bookmark__button");
  const bookmarkIcon = document.createElement("iclass");
  bookmarkIcon.classList.add("fa-bookmark", "fa-solid");
  bookmarkButton.append(bookmarkIcon);
  sectionCard.append(bookmarkButton);

  const showAnswerButton = document.createElement("button");
  showAnswerButton.classList.add("show-answer__button", "front-button");
  showAnswerButton.textContent = "Show";
  sectionCard.append(showAnswerButton);

  const answerContainer = document.createElement("div");
  answerContainer.classList.add("answer-container");
  const answerParagraph = document.createElement("p");
  answerParagraph.textContent = inputAnswer;
  answerContainer.append(answerParagraph);
  sectionCard.append(answerContainer);

  const tagList = document.createElement("ul");
  tagList.classList.add("tag-list");
  const tag = document.createElement("li");
  tag.classList.add("tag", "front-button");
  sectionCard.append(tagList);
  tagList.append(tag);
  tag.textContent = inputTag;

  document.body.append(sectionCard);
});

