console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const addButton = document.querySelector("[data-js=add]");
console.log(addButton);
const subtractButton = document.querySelector("[data-js=subtract]");
console.log(subtractButton);
const multiplyButton = document.querySelector("[data-js=multiply]");
console.log(multiplyButton);
const divideButton = document.querySelector("[data-js=divide]");
console.log(divideButton);
const exponentButton = document.querySelector("[data-js=exponent]");
console.log(exponentButton);
const moduloButton = document.querySelector("[data-js=modulo]");
console.log(exponentButton);
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
addButton.addEventListener("click", () => {
  const resultAddition = operand1 + operand2;
  console.log(resultAddition);
});

subtractButton.addEventListener("click", () => {
  const resultSubtraction = operand1 - operand2;
  console.log(resultSubtraction);
});

multiplyButton.addEventListener("click", () => {
  const resultMultiplication = operand1 * operand2;
  console.log(resultMultiplication);
});

divideButton.addEventListener("click", () => {
  const resultDivision = operand1 / operand2;
  console.log(resultDivision);
});

exponentButton.addEventListener("click", () => {
  const resultPotentaion = operand1 ** operand2;
  console.log(resultPotentaion);
});

moduloButton.addEventListener("click", () => {
  const resultModulation = operand1 % operand2;
  console.log(resultModulation);
});
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
const increaseByOneButton = document.querySelector("[data-js=increase-by-one]");
console.log(increaseByOneButton);
increaseByOneButton.addEventListener("click", () => {
  operand1 = operand1 + 1;
  console.log(operand1);
});

const increaseByFiveButton = document.querySelector(
  "[data-js=increase-by-five]"
);
console.log(increaseByFiveButton);
increaseByFiveButton.addEventListener("click", () => {
  operand1 = operand1 + 5;
  console.log(operand1);
});

const decreaseByOneButton = document.querySelector("[data-js=decrease-by-one]");
console.log(decreaseByOneButton);
decreaseByOneButton.addEventListener("click", () => {
  operand1 = operand1 - 1;
  console.log(operand1);
});

const decreaseByFiveButton = document.querySelector(
  "[data-js=decrease-by-five]"
);
console.log(decreaseByFiveButton);
decreaseByFiveButton.addEventListener("click", () => {
  operand1 = operand1 - 5;
  console.log(operand1);
});

const multiplyByTwoButton = document.querySelector("[data-js=multiply-by-two]");
console.log(multiplyByTwoButton);
multiplyByTwoButton.addEventListener("click", () => {
  operand1 = operand1 * 2;
  console.log(operand1);
});

// --^-- write your code here --^--
