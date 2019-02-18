var tracker = function(a, b, c) {

  var a = parseInt(document.getElementById("one").value);
  var b = parseInt(document.getElementById("two").value);
  var c = parseInt(document.getElementById("three").value);

  var sides = [];
  sides.push(a);
  sides.push(b);
  sides.push(c);

  if ((a + b > c && a + c > b && b + c > a) && (a === b && b === c)) {
    document.getElementById("output").innerHTML = "Sides (" + sides + ") form an equilateral triangle";
  } else if ((a + b > c && a + c > b && b + c > a) && ((a === b && b !== c) || (a === c && c !== b) || (b === c && b !== a))) {
    document.getElementById("output").innerHTML = "Sides (" + sides + ") form an isosceles triangle";
  } else if ((a + b > c && a + c > b && b + c > a) && (a !== b && b !== c && a !== c)) {
    document.getElementById("output").innerHTML = "Sides (" + sides + ") form a scalene triangle";
  } else if (!a || !b || !c) {
    document.getElementById("output").innerHTML = "Please input all side lengths";
  } else {
    document.getElementById("output").innerHTML = "Sides (" + sides + ") do not form a triangle";
  }
}

function triangle() {
  location.reload(true)
}