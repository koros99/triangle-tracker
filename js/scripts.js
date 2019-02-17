var tracker = function(a, b, c) {

  // var a = parseInt(document.getElementById("one").value);
  // var b = parseInt(document.getElementById("two").value);
  // var c = parseInt(document.getElementById("three").value);

  if ((a + b > c && a + c > b && b + c > a) && (a === b && b === c)) {
    document.getElementById("output").innerHTML = "This is an equilateral triangle";
  } else if ((a + b > c && a + c > b && b + c > a) && (a === b && b !== c) || (a === c && c !== b) || (b === c && b !== a)) {
    document.getElementById("output").innerHTML = "This is an isosceles triangle";
  } else if ((a + b > c && a + c > b && b + c > a) && (a !== b && b !== c && a !== c)) {
    document.getElementById("output").innerHTML = "This is a scalene triangle";
  } else {
    document.getElementById("output").innerHTML = "These sides cannot form a triangle";
  }
}