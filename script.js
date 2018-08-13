$(document).ready(function() {
// this function runs when first button is clicked
  $("#one").click(function() {
  var random = randomNumber();
  var guess = 1;
    check(guess, random);
});

//runs when second button clicked
$("#two").click(function() {
  var random = randomNumber();
  var guess = 2;
    check(guess, random);
});

//runs when third button is clicked
  $("#three").mousedown(function() {
    var random = randomNumber();
    var guess = 3;
    check(guess, random);
 });

  $(document).keydown(function(e) {
    if (e.keyCode == 49) {
      $("#one").addClass("active");
      $(document).keyup(function() {
        $("#one").removeClass("active");
        var random = randomNumber();
        var guess = 1;
        check(guess, random);
      });
    }
    if (e.keyCode == 50) {
      $("#two").addClass("active");
      $(document).keyup(function() {
        $("#two").removeClass("active");
        var random = randomNumber();
        var guess = 2;
        check(guess, random);
      });
    }
    if (e.keyCode == 51) {
      $("#three").addClass("active");
      $(document).keyup(function() {
        $("#three").removeClass("active");
        var random = randomNumber();
        var guess = 3;
        check(guess, random);
      });
    }
  });
});

//this function declares a random variable
function randomNumber() {
  var rand = Math.ceil(Math.random() * 3);
  return rand;
}

// this checks to see if the guess is correct and writes the result on the screen
function check(number, random) {
  if (number == random) {
    $("#response").removeClass("red");
    $("#response").addClass("green");
    $("#response").html("VICTORY!");
  } else {
    $("#response").removeClass("green");
    $("#response").addClass("red");
    $("#response").html("UNLUCKY! The correct answer was " + random + "! Have another try.");
  }
}