console.log("1" + 2); //output is string "12" anything involve string turn everything to string

console.log(6 - "2"); // 4, converts 2 to number

console.log("6" / "2"); //3, converts both to numbers

// Converts non-numbers
console.log(+true); // 1
console.log(+""); // 0

"" + 1 + 0; //"10"
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; // 2
"2" * "3"; //6
4 + 5 + "px"; // "9px"
"$" + 4 + 5; //"$45"
"4" - 2; // 2
"4px" - 2; // nan
"  -9  " + 5; // " -9 5"
"  -9  " - 5; //-14
null + 1; // 1
undefined + 1; //NaN
" \t \n" - 2; //-2 the string turned into 0
