console.log(0 === false); // false, because the types are different

//From JavaScript’s standpoint, this result is quite normal.
//An equality check converts values using the numeric conversion (hence "0" becomes 0),
//while the explicit Boolean conversion uses another set of rules.
let a = 0;
console.log(Boolean(a)); // false

let b = "0";
console.log(Boolean(b)); // true

console.log(a == b); // true!

console.log(null === undefined); // false

console.log(null == undefined); // true

//For maths and other comparisons < > <= >=
//null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

5 > 4; // true
"apple" > "pineapple"; //false
"2" > "12"; //true, because they are both string, they just comaprt the char which 2 is larger than 1
undefined == null; // true
undefined === null; // false
null == "\n0\n"; // false, because null only equals undefined and nothing else
null === +"\n0\n"; // false
