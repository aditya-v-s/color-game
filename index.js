var numofSquare = 6;
var colorArray = [];
var chosenColor;
var score = 0;

$(".level").click(function() {
  if ($(".level").text() === "Hard") {
    $(this).text("Easy");
      $(".result").text("Start a new Game");
    numofSquare = 3;
    for(var i=4; i<=6; i++){
      document.querySelector("#square-"+i).style.display = "none";
      }
  } else {
    $(".level").text("Hard");
    $(".color").css("display", "inline-block");
    numofSquare = 6;
    $(".result").text("Start a new Game");
  }
})

$(".color").click(function() {
  userChosenColor = $(this).css("background-color");
  var idChosenColor = $(this).attr("id");
  checkAnswer(idChosenColor);
})
$(".new-game").click(function() {
  var userChosenColor;
  $(".result").text("");
  $("h1").text("Choose the color "+chosenColor);

  colorArray = [];
  genColorArray(numofSquare);

})

function genColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var color = "rgb(" + red + ", " + green + ", " + blue + ")";
  return color;
}

function genColorArray(num) {
  for (var i = 0; i < num; i++) {
    colorArray.push(genColor());
  };
  applyColor();
  chosenColor = colorArray[randomColorChooser(numofSquare)];
  $("h1").text("Choose the color "+chosenColor);
}

function applyColor() {
  for (var i = 0; i < colorArray.length; i++) {
    document.querySelectorAll(".color")[i].style.background = colorArray[i];
  }
}

function randomColorChooser(numofSquare) {
  var randomNumber = Math.floor(Math.random() * numofSquare);
  return randomNumber;
}

function checkAnswer(id) {
  if (userChosenColor === chosenColor) {
    $(".color").css("display", "inline-block");
    $(".color").css("background-color", chosenColor);
    $(".title-container").css("background-color", chosenColor);
    $(".result").text("Correct, Start a new Game");
    score++;
    $(".score").text("Score : " + score);
    colorArray = [];
  } else {
    $("#" + id).css("display", "none");
    $(".result").text("Wrong Answer, Try again.")
  }
}
