//not that they define the variable in for loop, it will only call it once
for (let i = 0; i < 3; i++) {
  // shows 0, then 1, then 2
  console.log(i);
}

//you can also define it outside of for loop.
let j = 0; // we have j already declared and assigned

for (; j < 3; j++) {
  // no need for "begin"
  console.log(j); // 0, 1, 2
}

//break will break the loop
let sum = 0;

while (true) {
  let value = +prompt("Enter a number", "");

  if (!value) break; // (*)

  sum += value;
}
console.log("Sum: " + sum);

//continue will skip to next iteration
for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  console.log(i); // 1, then 3, 5, 7, 9
}

//break out nested loop using label name:
outer: for (let i = 0; i < 3; i++) {
  //!you can also do it like this:
  //!outer:
  //for (let i = 0; i < 3; i++) { ... }

  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

console.log("Done!");

//task
for (let i = 2; i <= 10; i++) {
  if (i % 2) {
    continue;
  }
  console.log(i);
}

//task replace for with while

let n = 0;

while (n < 3) {
  console.log(`number ${n}`);
  n++;
}

//task output prime num

let num = 10;

nextPrime: for (let i = 2; i <= num; i++) {
  // for each i...

  for (let j = 2; j < i; j++) {
    // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  console.log(i); // a prime
}
