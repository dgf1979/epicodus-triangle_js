"use strict";

//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
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

  return ''

};
