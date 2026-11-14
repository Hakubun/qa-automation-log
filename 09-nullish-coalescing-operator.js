let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

console.log(area); // 5000

// without parentheses
let area1 = height ?? 100 * width ?? 50;
// ...works this way (not what we want):
//let area1 = height ?? (100 * width) ?? 50;
let x = 1 && 2 ?? 3; // Syntax error

//?? together with || or && in one expression → parentheses required
