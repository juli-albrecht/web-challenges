console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const body = document.querySelector('[data-js="body"]');

const newArticle = document.createElement("article");
newArticle.classList.add("post");

const newParagraph = document.createElement("p");
newParagraph.classList.add("post__content");
newParagraph.textContent = "Neeeeeeew";

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");

const newSpan = document.createElement("span");
newSpan.classList.add("post__username");
newSpan.textContent = "@username";

const newButton = document.createElement("button");
newButton.classList.add("post__button");
newButton.textContent = " ♥ Like";
newButton.addEventListener("click", handleLikeButtonClick);

newArticle.appendChild(newParagraph);
newArticle.appendChild(newFooter);
newArticle.appendChild(newSpan);
newArticle.appendChild(newButton);
document.body.appendChild(newArticle);
