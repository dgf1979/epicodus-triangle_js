"use strict";

//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

// form processing
$(document).ready(function() {
  $("#result").hide();

  $("form#triangle").submit(function(event) {
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());
    var result = triangle(sideA, sideB, sideC);

    $(".type").text(result);

    $("#result").show();
    event.preventDefault();
  });
});


//raw js
var foo = function(bar) {
  return false;
};


var triangle = function(sideA, sideB, sideC) {
  var sides = [sideA, sideB, sideC]
  sides.sort(function(a, b){return a-b})

  if (sides[0] + sides[1] <= sides[2]) {
    return 'invalid';
  }
  if (sides[0] === sides[2]) {
    return 'equilateral'
  } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
    return 'isosceles'
  } else {
    return 'scalene'
  }
};
