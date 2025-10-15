console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');
const switchButton = document.querySelector('[data-js="button-switch"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
});

switchButton.addEventListener("click", () => {
  if (firstInput.value === firstInput.value.toUpperCase()) {
    firstInput.value = firstInput.value.toLowerCase();
  } else if (firstInput.value === firstInput.value.toLowerCase()) {
    firstInput.value = firstInput.value.toUpperCase();
  }
});
