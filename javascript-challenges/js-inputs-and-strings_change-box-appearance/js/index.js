console.clear();

const box = document.querySelector('[data-js="box"]');
const colorSwitch = document.querySelector('[data-js="input-color"]');
const borderRadiusSwitch = document.querySelector('[data-js="input-radius"]');
const rotationSwitch = document.querySelector('[data-js="input-rotation"]');

// console.log(box);
// console.log(colorSwitch);
// console.log(borderRadiusSwitch);
// console.log(rotationSwitch);

colorSwitch.addEventListener("input", () => {
  const colorTone = colorSwitch.value;
  box.style.background = `hsl(${colorTone}, 70%, 60%)`;
  //   box.style.background = "#000000";
});

borderRadiusSwitch.addEventListener("input", () => {
  const radius = borderRadiusSwitch.value;
  box.style.borderRadius = `${radius}%`;
});

rotationSwitch.addEventListener("input", () => {
  const angle = rotationSwitch.value;
  box.style.transform = `rotate(${angle}deg)`;
});
