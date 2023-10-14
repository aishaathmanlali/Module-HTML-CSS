function isValidTriangle(a, b, c) {
    if (a + b <= c || b + c <= a || a + c <= b) {
      return "false-not a triangle";
    } 
    else if (a === b && b === c) {
      return "true-equilateral triangle";
    } 
    else if (a === b || b === c || c === a) {
      return "true-isosceles triangle";
    } 
    else if (a + b > c && b + c > a && a + c > b) {
      return "true-scalene triangle";
    } 
}
    

const currentOutput = isValidTriangle(5, 5, 5);
const targetOutput = "true-equilateral triangle";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

const currentOutput2 = isValidTriangle(6, 7, 8);
const targetOutput2 = "true-scalene triangle";
console.assert(
  currentOutput2 === targetOutput2,
  "current output: %s, target output: %s",
  currentOutput2,
  targetOutput2
);

const currentOutput3 = isValidTriangle(8, 7, 8);
const targetOutput3 = "true-isosceles triangle";
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);
