var questionsArray = [
    "What is Earth's largest continent?",
    "In which state is Mount Rushmore located?",
    "Which is the largest country in the world by area?",
    "What is the name of Japan's main island?",
    "Which ocean is the largest?",
    "How many countries are in Europe?",
    "Which country has the largest population?",
    "Which is the longest river in the US?",

];
var answersArray = [
    ["Asia", "North-America", "Africa"],
    ["Nevada", "South Dakota", "Montana"],
    ["Russia", "China", "Brazil"],
    ["Honshu", "Kyushu", "Yakushima"],
    ["Pacific", "Atlantic", "Indian"],
    ["33", "44", "55"],
    ["India", "China", "Russia"],
    ["Mississippi River", "Yukon River", "Missouri River"]

];
var correctArray = [
    "Asia", "South Dakota", "Russia", "Honshu", "Pacific", "44", "China", "Mississippi River"

];

window.onload = function () {
$("#maincontent").hide();
 $("#startButton").click(function() {
    $("#maincontent").show();
 }
 

 )};

$("#startButton").click(function () {
    var time = 30;
    setInterval(function () {
      time--;
      if (time >= 0) {
        span = document.getElementById("time");
        span.innerHTML = time;
      }
      if (time === 0) {
        alert("Time's up!");
        clearInterval(time);  
      }
    }, 1000);

  });

  //timer solution referenced from https://stackoverflow.com/questions/21670438/make-countdown-start-after-button-is-clicked




$(document).ready(function () {
    for (i = 0; i < questionsArray.length; i++) {
        $("#quiz").append("<p>" + questionsArray[i] + "</p>");
        var currentAnswers = answersArray[i]
        $("#quiz").append("<input type='radio' name='q" + parseInt(i) + "' value='" + currentAnswers[0] + "'/>" + currentAnswers[0] + "<br/>");
        $("#quiz").append("<input type='radio' name='q" + parseInt(i) + "' value='" + currentAnswers[1] + "'/>" + currentAnswers[1] + "<br/>");
        $("#quiz").append("<input type='radio' name='q" + parseInt(i) + "' value='" + currentAnswers[2] + "'/>" + currentAnswers[2] + "<br/>");

        

        

    }

    
    $("#quiz").append('<button class="btn btn-info btn-lg" onclick="calculate_score();">Get Score</button>')



})


function calculate_score() {


    var numCorrect = 0;
    for (i = 0; i < questionsArray.length; i++) {
        if ($("input[name='q" + parseInt(i) + "']:checked").val() == correctArray[i]) {
            numCorrect++;
        }

    }
    console.log("score: " + numCorrect + " out of 8 ")
    alert("score: " + numCorrect + " out of 8 ");
}


