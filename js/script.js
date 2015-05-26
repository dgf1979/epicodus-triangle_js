"use strict";
<<<<<<< HEAD


=======
>>>>>>> b15f126d10083a9096e4a8c4df4100f80da40464
//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js
var foo = function(bar) {
  return false;
};

<<<<<<< HEAD
var triangle = function(sideA, sideB, sideC) {
  return 'invalid';
};
=======


var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("#result").hide();
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);
    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
    event.preventDefault();
  });
});
>>>>>>> b15f126d10083a9096e4a8c4df4100f80da40464
