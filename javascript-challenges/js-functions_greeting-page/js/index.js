console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

getGreeting();

function getGreeting() {
  let hour = new Date().getHours();
 if (hour < 6) {
    console.log("Good Night");
  }
  if else (hour < 13) {
    console.log("Good Morning");
  }
 if else (hour < 18) {
    console.log("Good Afternoon");
  }
  else (hour < 24){
    console.log("Good Evening");
  }
}

const backgroundColor = document.querySelector('[data-js="body"]');


function getDayColor() {
  let weekday = new Date().getDay();
  if (weekday === 1) {
    body.classList.backgroundcolor = "darkgray";

  }
  if else ((weekday > 1) && (weekday < 5)) {
    body.classList.backgroundcolor = "lightblue";
  }

  else () {
    body.classList.backgroundcolor = "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
