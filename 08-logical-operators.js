alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 1 then 2, since first one is a fuction it will call it but because it's not a true value it will select 2 in ||
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // 1 because both function will return undefined.
alert(null || (2 && 3) || 4); // 3 because && have higher precedence so it will pick 3 because && will return last value if both are truthy values. then the || return first truthy value which is 3.

let age = prompt("What is your age?", 18);

let result = age >= 14 && age <= 90 ? true : false;

// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert("first");

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert("second");

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || (-1 && 1)) alert("third");

let username = prompt("Who's there?", "");

if (username === "Admin") {
  let password = prompt("Password?", "");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === "" || password === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (username === "" || username === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
