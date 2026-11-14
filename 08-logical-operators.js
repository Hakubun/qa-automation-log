console.log(null || 2 || undefined); // 2
console.log(console.log(1) || 2 || console.log(3)); // 1 then 2, since first one is a fuction it will call it but because it's not a true value it will select 2 in ||
console.log(1 && null && 2); // null
console.log(console.log(1) && console.log(2)); // 1 undefined, it will run first console.log(1) as it will return undefined then it break the && logic so it won't run second one
console.log(null || (2 && 3) || 4); // 3 because && have higher precedence so it will pick 3 because && will return last value if both are truthy values. then the || return first truthy value which is 3.

let age = prompt("What is your age?", 18);

// The result of -1 || 0 = -1, truthy
if (-1 || 0) console.log("first");

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) console.log("second");

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || (-1 && 1)) console.log("third");

let username = prompt("Who's there?", "");

if (username === "Admin") {
  let password = prompt("Password?", "");
  if (password === "TheMaster") {
    console.log("Welcome!");
  } else if (password === "" || password === null) {
    console.log("Canceled");
  } else {
    console.log("Wrong password");
  }
} else if (username === "" || username === null) {
  console.log("Canceled");
} else {
  console.log("I don't know you");
}
