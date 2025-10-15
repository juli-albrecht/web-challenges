console.clear();

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const Data = Object.fromEntries(formData);
  console.log("User data:", Data);

  const formElements = event.target.elements;
  //   console.log("age: ", formElements.age.value);
  const badness = formElements.badness.value;
  const age = formElements.age.value;
  const score = badness + age;
  console.log("badness score: " + score);
  event.target.reset();
});
