console.clear();

const Input = document.querySelector('[data-js="first-input"]');

Input.value;

const Button = document.querySelector('[data-js="button-uppercase"]');

Button.addEventListener("click", () => {
  Input.value = Input.value.toUpperCase();
});
