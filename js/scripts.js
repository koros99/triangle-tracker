var a = parseInt(prompt("Enter first side"));
var b = parseInt(prompt("Enter second side"));
var c = parseInt(prompt("Enter third side"));

if ((a + b > c && a + c > b && b + c > a) && (a === b && b === c)) {
  alert("This is an equilateral triangle")
} else if ((a + b > c && a + c > b && b + c > a) && (a === b && b !== c) || (a === c && c !== b) || (b === c && b !== a)) {
  alert("This is an isosceles triangle")
} else if ((a + b > c && a + c > b && b + c > a) && (a !== b && b !== c && a !== c)) {
  alert("This is a scalene triangle")
} else {
  alert("These sides cannot form a triangle")
}