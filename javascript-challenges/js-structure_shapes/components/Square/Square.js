import { getRandomColor } from "../../utils/randomColor.js";
function Square() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColor();
  });
  root.append(square);
  return square;
}
export { Square };
