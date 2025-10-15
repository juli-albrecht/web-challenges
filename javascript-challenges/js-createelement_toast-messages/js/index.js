console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newElement = document.createElement("li");
  newElement.classList.add("toast-container__message");
  newElement.textContent = "Das ist das neue LI Element";
  toastContainer.append(newElement);
});

clearButton.addEventListener("click", (event) => {
  event.preventDefault();
  toastContainer.innerHTML = "";
});
