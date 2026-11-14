let year = prompt(
  "In which year was ECMAScript-2015 specification published?",
  "",
);

if (year == 2015) console.log("You guessed it right!");
else if (year < 2015) {
  console.log("Too early...");
  console.log("Didn’t become official until 2015.");
}

let accessAllowed;
let age = prompt("How old are you?", "");

let response = age > 18 ? "You are allowed" : "You are not allowed";

let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
      ? "Hello!"
      : age < 100
        ? "Greetings!"
        : "What an unusual age!";

console.log(message);

//task 1
if ("0") {
  console.log("Hello");
}

//task 2
let officialName = prompt("What is the official name of JavaScript?", "");

let answer =
  officialName == "ECMAScript" ? "Right!" : "You don't know? ECMAScript!";

console.log(answer);

//task 3
let number = prompt("Enter a number", 0);

let message2 =
  number > 0
    ? console.log("1")
    : number < 0
      ? console.log(" -1")
      : console.log("0");

//task 4
let a, b;
a = prompt("Enter a number a", 0);
b = prompt("Enter a number b", 0);
let result = a + b < 4 ? "Below" : "Over";

let login = prompt("Enter your login", "");
let message3 =
  login == "employee"
    ? "Hello"
    : login == "Director"
      ? "Greetings"
      : login == ""
        ? "No login"
        : "";
