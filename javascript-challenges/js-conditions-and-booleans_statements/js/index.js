console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === "h4x0r1337") {
  console.log("Welcome! You are logged in as Brunhilde1984");
} else {
  console.log("Access denied");
}

// Part 2: Even / Odd
const number = 7;
const isEven = number % 2 === 0;

if (isEven) {
  console.log("Yes");
} else {
  console.log("No");
}

// Part 3: Hotdogs
const numberOfHotdogs = 10000000;

if (numberOfHotdogs < 4) {
  console.log(numberOfHotdogs * 2);
} else if (numberOfHotdogs < 100) {
  console.log(numberOfHotdogs * 1.5);
} else if (numberOfHotdogs < 1000000) {
  console.log(numberOfHotdogs * 1);
} else if (1000000 <= numberOfHotdogs) {
  console.log(numberOfHotdogs * 0.1);
} else {
  console.log("");
}

// Part 4: Daytime
const currentHour = 12;

const statement = (currentHour < 17) ? + "Still need to learn");

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
